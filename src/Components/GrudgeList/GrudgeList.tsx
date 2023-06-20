import grudgeListCSS from  './GrudgeList.module.css';
import GrudgeBox from '../GrudgeBox/GrudgeBox'
import { useContext } from 'react';
import Context from '../../context';


const GrudgeList = () => {
  const appModel = useContext(Context);

  function handleSetEvilScore(id: number, score: number) {
    appModel?.setGrudgeBoxes(
      appModel?.allGrudgeBoxes.map((box) =>
          box.Id === id ? { ...box, BadScore: score} : box
      )
    )
  }

  function handleSetGoodScore(id: number, score: number) {
    appModel?.setGrudgeBoxes(
      appModel?.allGrudgeBoxes.map(
        (box) => box.Id === id ? { ...box, GoodScore: score} : box
      )
    )
  }

  return (
    <div className={grudgeListCSS.GrudgeList}>
      {
        appModel?.allGrudgeBoxes.map((box) => (
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