import styles from "../styles/books.module.css";

interface IBooks {
	id: string;
	contributor: string;
	image: string;
	url: string;
}

export default function Books({id, contributor, image, url}:IBooks){
	return(
		<div className={styles.book}>
			<div className={styles.image}>
				<img src={image} alt={id}/>
			</div>
			<h4>{id}</h4>
			<h5>{contributor}</h5>
			<a href={url} target={"_blank"}>BUY &rarr;</a>
		</div>
	);
}