"use client"
import Link from "next/link";
import styles from "../styles/navigation.module.css"
import { usePathname } from "next/navigation";

export default function Navigation(){
	const path = usePathname();
	return (
		<nav className={styles.nav_wrap}>
			<ul>
				<li>{path === "/"? <Link href="/" className={styles.on}>Home</Link> : <Link href="/">Home</Link>}</li>
				<li>{path === "/"? <Link href="/about" className={styles.on}>About</Link> : <Link href="/about">About</Link>}</li>
			</ul>
		</nav>
	);
}