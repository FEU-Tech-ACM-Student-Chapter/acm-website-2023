import Link from "next/link";
type TLink = `/${string}` | `#${string}`;
export interface LinkProps {
	props: {
		href: TLink;
		label: string;
		className?: string;
		onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	};
	children: React.ReactNode;
}
const GenLink: React.FC<LinkProps> = ({ children, props }) => {
	const { href, label, className, onClick } = props;
	return (
		<Link
			href={href}
			title={label}
			hrefLang="en-us"
			aria-label={label}
			onClick={onClick}
			className={className}
		>
			{children}
		</Link>
	);
};
export default GenLink;
