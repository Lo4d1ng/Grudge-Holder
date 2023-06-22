import { createContext } from "react";
import IAppContextModel from "./Model/IAppContextModel";

const Context = createContext<IAppContextModel | undefined>(undefined)

export default Context;
