import React from 'react'
import './Components.css';
import AngelPng from '../Images/angel.png'
import DevilPng from '../Images/devil.png'

interface Props extends goodProps, badProps{}

interface goodProps{
  totalGood?: number
}

interface badProps{
  totalBad?: number
}

const GeneralCounter = ({totalGood, totalBad} : Props) => {
  if(totalGood !== undefined)
  {
    return (
      <div className='generalCounter'>
        <img src={AngelPng} />
        <span>{totalGood}</span>
      </div>
    )
  }
  else{
    return (
      <div className='generalCounter'>
        <img src={DevilPng} />
        <span>{totalBad}</span>
      </div>
    )
  }
}


export default GeneralCounter