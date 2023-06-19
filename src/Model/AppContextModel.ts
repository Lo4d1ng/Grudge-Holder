import { ICounterBoxModel } from "./GCounterBoxModel"

export default interface IAppContextModel{
    setGrudgeBoxes: React.Dispatch<React.SetStateAction<ICounterBoxModel[]>>;
    allGrudgeBoxes: ICounterBoxModel[]
} 