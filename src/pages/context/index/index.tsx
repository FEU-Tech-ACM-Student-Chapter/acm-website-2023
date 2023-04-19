import { createContext, ReactNode, useState } from "react";
import { IContextIndex } from "./type";
const ContextIndex = createContext<IContextIndex>({} as IContextIndex);
export default ContextIndex;

interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	return (
		<ContextIndex.Provider
			value={{
				isMenuOpen,
				setIsMenuOpen,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
