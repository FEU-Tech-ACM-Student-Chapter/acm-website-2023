/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextDataIndex = runtimeCaching.findIndex(
	(entry) => entry.options.cacheName === "next-data"
);
if (nextDataIndex !== -1) {
	runtimeCaching[nextDataIndex].handler = "NetworkFirst";
} else {
	throw new Error("Failed to find next-data object in runtime caching");
}

const withPWA = require("next-pwa")({
	dest: "public",
	runtimeCaching,
	cacheOnFrontEndNav: process.env.NODE_ENV === "production",
	fallbacks: {
		document: "/_offline",
		image: "/android-chrome-512x512.png",
		font: "/fonts/fallback.woff2",
		audio: "",
		video: "",
	},
	buildExcludes: [/manifest.webmanifest$/],
	skipWaiting: true,
	scope: "/",
	sw: "service-worker.js",
	disable: process.env.NODE_ENV === "development",
});
// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
];
module.exports = withPWA({
	// reactStrictMode: true,
	swcMinify: true,
	env: {},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: securityHeaders,
			},
		];
	},
});
