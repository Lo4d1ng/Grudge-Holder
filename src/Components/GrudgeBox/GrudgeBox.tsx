import React, { useState } from 'react'
import componentCSS from '../Components.module.css';
import grudgeBoxCSS from './GrudgeBox.module.css'

import { ICounterBoxModel } from '../../Model/GCounterBoxModel'
import Button from '../Button/Button'
import AddIcon from "../../Images/add.png"
import DevilPng from "../../Images/devil.png"
import AngelPng from "../../Images/angel.png"
import Portal from '../Modal/ModalPortal';
import NewGrudgePanel from '../Modal/NewGrudgePanel';


const GrudgeBox = ({Id, PersonName, BadScore, GoodScore, SetEvilScore, SetGoodScore} : ICounterBoxModel) => {
  const [isHovered, setIsHoveredState] = useState<boolean>(false);

  return (
    <div className={`${componentCSS.panel} ${grudgeBoxCSS.grudgeBox}`}
      onMouseEnter={() => setIsHoveredState(true)}
      onMouseLeave={() => setIsHoveredState(false)}
      >
      <div className={grudgeBoxCSS.gbheader}>
        <span>{PersonName}</span>
      </div>
      <div className={grudgeBoxCSS.gbScoreWrap}>
        <div className={grudgeBoxCSS.gbScore}>
          <div className={`${grudgeBoxCSS.gbScoreButton} ${isHovered ? grudgeBoxCSS.visible : ''}`}>
            <Button text='' icon={AddIcon} onClick={() => SetEvilScore && SetEvilScore(Id, BadScore + 1)} />
          </div>
          <img src={DevilPng}/>
          {BadScore}
        </div>

        <div className={grudgeBoxCSS.gbScore}>
          {GoodScore}
          <img src={AngelPng}/>
          <div className={`${grudgeBoxCSS.gbScoreButton} ${isHovered ? grudgeBoxCSS.visible : ''}`}>
            <Button text='' icon={AddIcon} onClick={() => SetGoodScore && SetGoodScore(Id, GoodScore + 1)} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default GrudgeBox