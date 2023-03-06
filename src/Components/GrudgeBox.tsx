import React, { useState } from 'react'
import { CounterBoxModel } from '../Model/GCounterBoxModel'
import Button from './Button'
import AngelPng from '../Images/angel.png'
import DevilPng from '../Images/devil.png'
import AddIcon from '../Images/add.png'


const GrudgeBox = ({Id, PersonName, BadScore, GoodScore, SetEvilScore, SetGoodScore} : CounterBoxModel) => {
  const [isHovered, setIsHoveredState] = useState<boolean>(false);

  return (
    <div className='grudgeBox panel' 
      onMouseEnter={() => setIsHoveredState(true)}
      onMouseLeave={() => setIsHoveredState(false)}
      >
      <div className='gb-header'>
        <span>{PersonName}</span>
      </div>
      <div className='gb-scoreWrap'>
        <div className='gb-score'>
          <div className={`gb-score-button ${isHovered ? 'visible' : ''}`}>
            <Button text='' icon={AddIcon} onClick={() => SetEvilScore && SetEvilScore(Id, BadScore + 1)} />
          </div>
          <img src={DevilPng}/>
          {BadScore}
        </div>

        <div className='gb-score'>
          {GoodScore}
          <img src={AngelPng}/>
          <div className={`gb-score-button ${isHovered ? 'visible' : ''}`}>
            <Button text='' icon={AddIcon} onClick={() => SetGoodScore && SetGoodScore(Id, GoodScore + 1)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrudgeBox