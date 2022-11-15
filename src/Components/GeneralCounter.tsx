import React from 'react'
import './Components.css';

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
      <div>
        <img src='https://github.com/Lo4d1ng/Grudge-Holder/blob/main/src/Images/emoji_placeholder.svg' />
        <div>{totalGood}</div>
      </div>
    )
  }
  else{
    return (
      <div>
        <img src='https://github.com/Lo4d1ng/Grudge-Holder/blob/main/src/Images/emoji_placeholder.svg'/>
        <div>{totalBad}</div>
      </div>
    )
  }
}


export default GeneralCounter