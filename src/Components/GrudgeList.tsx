import { CounterBoxModel } from '../Model/GCounterBoxModel'
import GrudgeBox from './GrudgeBox'

interface Props{
  allGrudgeBoxes: CounterBoxModel[],
  setGrudgeBoxes: React.Dispatch<React.SetStateAction<CounterBoxModel[]>>;
}

const GrudgeList = ({allGrudgeBoxes, setGrudgeBoxes} : Props) => {

  function handleSetEvilScore(id: number, score: number) {
    setGrudgeBoxes(
      allGrudgeBoxes.map((box) =>
          box.Id === id ? { ...box, BadScore: score} : box
      )
    )
  }

  function handleSetGoodScore(id: number, score: number) {
    setGrudgeBoxes(
      allGrudgeBoxes.map(
        (box) => box.Id === id ? { ...box, GoodScore: score} : box
      )
    )
  }

  return (
    <div className='GrudgeList'>
      {
        allGrudgeBoxes.map((box) => (
          <GrudgeBox 
            Id={box.Id}
            PersonName = {box.PersonName}
            BadScore={box.BadScore}
            GoodScore={box.GoodScore}
            SetEvilScore={handleSetEvilScore}
            SetGoodScore={handleSetGoodScore}
          />
        ))
      }
    </div>
  )
}

export default GrudgeList