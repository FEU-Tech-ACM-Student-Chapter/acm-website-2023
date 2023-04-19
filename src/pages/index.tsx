import Body from "@/components/pages/index/body";
import Footer from "@/components/pages/index/footer";
import Nav from "@/components/pages/index/nav";
import { NextPageWithLayout } from "./_app";
import { ContextProviderIndex } from "./context/index";
import styles from "./index.module.css";
const IndexPage: NextPageWithLayout = () => {
	return (
		<section className={styles.ctr}>
			<Nav />
			<Body />
			<Footer />
		</section>
	);
};

IndexPage.getLayout = (page) => (
	<ContextProviderIndex>{page}</ContextProviderIndex>
);

export default IndexPage;
