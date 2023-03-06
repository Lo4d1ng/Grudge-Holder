import React from 'react'
import './Components.css';

interface Props{
  text: string,
  icon: string,
  onClick: () => void;
}

const Button = ({text, icon, onClick} : Props) => {
 
  return (
    <div className='button panel' onClick={onClick}>
      <img src={icon} />
      {
        text ? (
          <span>{text}</span>
        ) : ''
      }
    </div>
  )
}

export default Button
