import { createContext, useContext } from "react";
import IAppContextModel from "./Model/AppContextModel";

const Context = createContext<IAppContextModel | undefined>(undefined)

/*
export const useAppModelContext = () => {
    const context = useContext(Context);
    if (!context)
        throw new Error(
            'No context.Provider found when calling context.'
        );
    return Context;
};
*/
export default Context;
