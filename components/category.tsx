import Link from "next/link";
import styles from "../styles/category.module.css"


interface ICategory {
	id: string;
    name: string;
}

export default function Category({ id, name}: ICategory) {
    return (
        <div className={styles.list}>
			<Link prefetch href={`/list/${id}`}>
				<div>{name} &rarr;</div>
			</Link>
        </div>
    );
}
