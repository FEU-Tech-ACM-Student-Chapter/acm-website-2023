import "@/styles/globals.css";
import { Partytown } from "@builder.io/partytown/react";
import { Analytics } from "@vercel/analytics/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import { ContextProviderGlobal } from "./context/_global";
const fonts = Montserrat({ subsets: ["latin"] });
export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout & AppProps) {
	const {
		Component,
		pageProps: { ...pageProps },
	} = props;
	const getLayout = Component.getLayout ?? ((page) => page);
	const colorBlack = "#090909";
	const colorViolet = "#7529c5";
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>FEU Tech ACM</title>
				<meta
					name="description"
					content="FEU Tech ACM Student Chapter is an organization operating exclusively for educational and scientific purposes in order to promote to increased knowledge and greater interest in science, design, development, construction, languages, management and applications; and as a means of communication between persons having an interest in computing."
				/>
				<meta name="url" content="http://localhost:3000" />
				<meta
					name="abstract"
					content="FEU Tech ACM Student Chapter is an organization operating exclusively for educational and scientific purposes in order to promote to increased knowledge and greater interest in science, design, development, construction, languages, management and applications; and as a means of communication between persons having an interest in computing."
				/>
				<meta name="author" content="FEU Tech ACM, acm.feu.it@gmail.com" />
				<meta name="reply-to" content="acm.feu.it@gmail.com" />
				<meta name="designer" content="Jester Sean Caspillo" />
				<meta name="publisher" content="Alpha Romer Coma" />
				<meta name="owner" content="FEU Tech ACM" />
				<meta name="target" content="all" />
				<meta name="copyright" content="Alpha Romer Coma" />
				<meta
					name="keywords"
					content="FEU, FEU TECH, ACM, Association for Computing Machinery, FEU Tech ACM, student organization, computer science, CS, organization"
				/>
				<meta name="Classification" content="Web Page" />
				<meta name="language" content="EN" />
				<meta name="coverage" content="Worldwide" />
				<meta name="distribution" content="Global" />
				<meta name="rating" content="General" />
				<meta name="subject" content="FEU Tech ACM" />
				<meta name="topic" content="FEU Tech ACM" />

				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="FEU Tech ACM" />

				<meta
					property="og:description"
					content="FEU Tech ACM Student Chapter is an organization operating exclusively for educational and scientific purposes in order to promote to increased knowledge and greater interest in science, design, development, construction, languages, management and applications; and as a means of communication between persons having an interest in computing."
				/>
				<meta property="og:url" content="http://localhost:3000" />
				<meta property="og:site_name" content="FEU Tech ACM" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/logo/og_image.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:alt" content="FEU Tech ACM Banner" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:locale" content="en_US" />
				<meta name="og:country-name" content="Philippines" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />
				<meta property="fb:app_id" content="1412473536183802" />

				{/* Twitter Meta Tags */}
				<meta property="twitter:title" content="FEU Tech ACM" />
				<meta
					property="twitter:description"
					content="FEU Tech ACM Student Chapter is an organization operating exclusively for educational and scientific purposes in order to promote to increased knowledge and greater interest in science, design, development, construction, languages, management and applications; and as a means of communication between persons having an interest in computing."
				/>
				<meta property="twitter:url" content="http://localhost:3000" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:app:country" content="EN" />
				<meta name="twitter:image" content="/logo/og_image.png" />
				<meta name="twitter:image:type" content="image/png" />
				<meta name="twitter:image:alt" content="FEU Tech ACM Banner" />
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<link rel="canonical" href="http://localhost:3000" />

				{/* Icons and browser stuff */}

				{/* Do not put this meta tag if you want to work and debug with next.js on mobile
				Also check of node.exe is not blocked 
				steps:
				1. firewall & network setting
				2. allow an app through firewall
				3. allow node.exe on public
				*/}

				{/* <meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/> */}

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="FEU Tech ACM" />
				<meta name="apple-touch-fullscreen" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content={colorBlack} />
				<meta name="application-name" content="FEU Tech ACM" />
				<meta name="msapplication-TileColor" content={colorBlack} />
				<meta name="msapplication-navbutton-color" content={colorBlack} />
				<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content={colorBlack} />
				<meta name="format-detection" content="telephone=no" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="194x194"
					href="/favicon-194x194.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color={colorBlack} />
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
				/>
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			{getLayout(
				<ContextProviderGlobal>
					<NextNProgress
						color={colorViolet}
						transformCSS={(css) => {
							return (
								<style>{css.replace("top: 15px;", "bottom: 15px;")}</style>
							);
						}}
					/>
					<main className={fonts.className}>
						<Component {...pageProps} />
						<Analytics />
					</main>
				</ContextProviderGlobal>,
			)}
		</>
	);
}

export default MyApp;
