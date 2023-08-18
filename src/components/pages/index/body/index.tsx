import Home from "./home";
import styles from "./index.module.css";
const Body: React.FC = () => {
	return (
		<section className={styles.ctr}>
			<Home />
			{/* <Apply /> */}
		</section>
	);
};

export default Body;
