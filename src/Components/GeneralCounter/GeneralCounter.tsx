import React from 'react'
import componentsCSS from '../Components.module.css';
import generalCounterCSS from './GeneralCounter.module.css'
import AngelPng from '../../Images/angel.png'
import DevilPng from '../../Images/devil.png'

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
      <div className={generalCounterCSS.generalCounter}>
        <img className={generalCounterCSS.generalCounterIcon} src={AngelPng} />
        <span className={generalCounterCSS.generalCounterText}>{totalGood}</span>
      </div>
    )
  }
  else{
    return (
      <div className={generalCounterCSS.generalCounter}>
        <img className={generalCounterCSS.generalCounterIcon} src={DevilPng} />
        <span className={generalCounterCSS.generalCounterText}>{totalBad}</span>
      </div>
    )
  }
}


export default GeneralCounter