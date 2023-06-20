import React from 'react'
import componentCSS from '../Components.module.css';
import buttonCSS from './Button.module.css'

interface Props{
  text: string
  icon: string
  
  onlyHoverShadow?: boolean
  onClick: () => void
}

const Button = ({text, icon, onClick, onlyHoverShadow = false} : Props) => {
  return (
    <div className={`${buttonCSS.button} ${componentCSS.panel} ${onlyHoverShadow ? componentCSS.panelShadowOnHover : componentCSS.panelShadow }`} 
         onClick={onClick}
    >
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
