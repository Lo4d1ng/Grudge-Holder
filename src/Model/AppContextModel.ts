import { ICounterBoxModel } from "./GCounterBoxModel"

export default interface IAppContextModel{
    setGrudgeBoxes: React.Dispatch<React.SetStateAction<ICounterBoxModel[]>>
    setIsFullScreenModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    allGrudgeBoxes: ICounterBoxModel[]
} 
