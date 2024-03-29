import Image from "next/image";
interface IImage {
	props: {
		src: string;
		height: number;
		width: number;
		alt: string;
		className?: string;
	};
}

const GenImage: React.FC<IImage> = ({ props }) => {
	const { src, height, width, alt, className } = props;
	return (
		<Image
			src={src}
			height={height}
			width={width}
			title={alt}
			alt={alt}
			className={className}
			// style={{
			// 	display: "inline-flex",
			// 	justifyContent: "center",
			// 	alignItems: "center",
			// }}
		/>
	);
};

export default GenImage;
