import GenButton from "@/components/gen/button";
import styles from "./index.module.css";
const Home: React.FC = () => {
	return (
		<div id="home" className={styles.home}>
			<h1 className={styles.quote}>
				Connecting minds <br />
				Building Futures
			</h1>
			<p>
				FEU Tech ACM Student Chapter is an organization operating exclusively
				for educational and scientific purposes in order to promote to increased
				knowledge and greater interest in science, design, development,
				construction, languages, management and applications; and as a means of
				communication between persons having an interest in computing.
			</p>
			<GenButton
				props={{
					label: "Become a Member",
					onClick: () => console.log("Become a Member"),
					className: `btnPurple`,
				}}
			>
				Become a Member
			</GenButton>
			<GenButton
				props={{
					label: "Learn More",
					onClick: () => console.log("Learn More"),
					className: `btnWhite`,
				}}
			>
				Learn More
			</GenButton>
		</div>
	);
};

export default Home;
