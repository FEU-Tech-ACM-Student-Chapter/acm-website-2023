import GenButton from "@/components/gen/button";
import GenImage from "@/components/gen/image";
import GenLink, { LinkProps } from "@/components/gen/link";
import ContextIndex from "@/pages/context/index";
import { useContext } from "react";
import styles from "./index.module.css";
const links: LinkProps["props"][] = [
	{
		href: "#home",
		label: "Home",
	},
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#committees",
		label: "Committees",
	},
	{
		href: "#events",
		label: "Events",
	},
	{
		href: "#contact",
		label: "Contact",
	},
];
const Nav: React.FC = () => {
	const { setIsMenuOpen, isMenuOpen } = useContext(ContextIndex);
	return (
		<nav className={styles.nav}>
			<span className={styles.logoCtr}>
				<GenImage
					props={{
						src: "/logo/feuacm.png",
						height: 52,
						width: 100,
						alt: "logo",
					}}
				></GenImage>

				<h1 className={styles.orgName}>
					<GenLink
						props={links[0]}
					>
						FEU&nbsp;Tech&nbsp;ACM
					</GenLink>
				</h1>
			</span>
			<span
				className={`${styles.linkCtr} ${
					isMenuOpen ? styles.toggled : styles.untoggled
				}`}
			>
				{links.map((link) => (
					<GenLink props={link} key={link.label}>
						{link.label}
					</GenLink>
				))}
			</span>
			<GenButton
				props={{
					label: "Toggle Menu",
					onClick: () => setIsMenuOpen((prev) => !prev),
					className: `${styles.menuContainer}`,
				}}
			>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
			</GenButton>
		</nav>
	);
};

export default Nav;
