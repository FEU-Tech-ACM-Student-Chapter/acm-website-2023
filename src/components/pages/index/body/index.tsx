import styles from "./index.module.css";
import Home from "./home";
import Apply from "./apply";
const Body: React.FC = () => {
	return (
		<section className={styles.ctr}>
			<Home />
			<Apply />
		</section>
	);
};

export default Body;
