import Category from "../../components/category";
import { API_URL } from "../../constants";
import styles from "../../styles/home.module.css"


async function getBestSeller(){
	//await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(`${API_URL}lists`);
	const json = await response.json();
	return json;
}

export default async function Home(){
	const lists = await getBestSeller();

	return(
		<div className={styles.container}>
			<h1>The New York Times Best Seller Explorer</h1>
			<div>
				{lists.results.map((list) => (
					<Category
						key={list.list_name}
						id={list.list_name_encoded}
						name={list.list_name}						
					/>
				))}
			</div>
		</div>
	);
}