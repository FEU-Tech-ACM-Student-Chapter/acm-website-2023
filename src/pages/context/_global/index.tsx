import useDeviceType from "@/hooks/useDeviceType";
import { createContext, ReactNode } from "react";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const device = useDeviceType();
	return (
		<ContextGlobal.Provider
			value={{
				device,
			}}
		>
			{children}
		</ContextGlobal.Provider>
	);
};
