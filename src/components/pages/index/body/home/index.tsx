import GenButton from "@/components/gen/button";
import GenImage from "@/components/gen/image";
import styles from "./index.module.css";
const Home: React.FC = () => {
	return (
		<div id="home" className={styles.home}>
			<div className={styles.homeContent}>
				<h1 className={styles.title}>
					Connecting Minds,
					Building&nbsp;Futures
				</h1>
				<p>
					FEU Tech ACM Student Chapter is an organization operating exclusively
					for educational and scientific purposes in order to promote to
					increased knowledge and greater interest in science, design,
					development, construction, languages, management and applications; and
					as a means of communication between persons having an interest in
					computing.
				</p>
				<div className={styles.homeBtn}>
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
			</div>
			<div className={styles.homeImg}>
				<GenImage
					props={{
						src: "/branding/home-asset.png",
						height: 400,
						width: 400,
						alt: "home",
					}}
				></GenImage>
			</div>
		</div>
	);
};

export default Home;
