interface IContextGlobal {
	device: {
		type: "mobile" | "tablet" | "laptop" | "desktop";
		isHandheld: boolean;
	};
}

export default IContextGlobal;