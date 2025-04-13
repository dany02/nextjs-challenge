import styles from "../../styles/about.module.css"
export default function About(){
	return(
		<div className={styles.container}>
			<h2>ABOUT US</h2>
			<p>
				Welcome to the official explorer for The New York Times
				Best Seller list explorer.<br/>
				We hope you exjoy your stay!
			</p>
		</div>
	);
}