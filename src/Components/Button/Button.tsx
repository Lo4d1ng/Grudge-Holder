import React from 'react'
import componentCSS from '../Components.module.css';
import buttonCSS from './Button.module.css'

interface Props{
  text: string,
  icon: string,
  onClick: () => void;
}

const Button = ({text, icon, onClick} : Props) => {
 
  return (
    <div className={`${buttonCSS.button} ${componentCSS.panel}`} onClick={onClick}>
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
