import { createContext, useContext } from "react";
import IAppContextModel from "./Model/AppContextModel";

const Context = createContext<IAppContextModel | undefined>(undefined)


export default Context;
