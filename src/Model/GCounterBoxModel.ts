export interface ICounterBoxModel {
    Id: number
    PersonName: string
    BadScore: number
    GoodScore: number
    SetEvilScore?: (id: number, score: number) => void
    SetGoodScore?: (id: number, score: number) => void
}