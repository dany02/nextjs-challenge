import Books from "../../../../components/books";
import { API_URL } from "../../../../constants";
import styles from "../../../../styles/books.module.css";

async function getBookList(id:string){
	const response = await fetch(`${API_URL}list?name=${id}`);
	const json = response.json();
	return json;
}

export default async function BookList({params}: {params : Promise<{id : string}>}){
	const {id} = await params;
	const books = await getBookList(id);
	return (
		<div className={styles.container}>
			<h2>{books.results.list_name}</h2>
			<div className={styles.books_box}>
				{books.results.books.map((book) => (
					<Books
						key={book.rank}
						id={book.title}
						contributor={book.contributor}
						image={book.book_image}
						url={book.amazon_product_url}
					/>
				))}
			</div>
		</div>
	);
}