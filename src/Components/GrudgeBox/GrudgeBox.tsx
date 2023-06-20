import React, { useRef, useState } from 'react'
import componentCSS from '../Components.module.css'
import grudgeBoxCSS from './GrudgeBox.module.css'
import globalCSS from '../../global.module.css'

import { ICounterBoxModel } from '../../Model/ICounterBoxModel'
import Button from '../Button/Button'
import AddIcon from "../../Images/add.png"
import DevilPng from "../../Images/devil.png"
import AngelPng from "../../Images/angel.png"
import EditIcon from "../../Images/edit.svg"
import Portal from '../Modal/ModalPortal'
import EditGrudgePanel from '../Modal/EditGrudgePanel'
import ReactDOM from 'react-dom'

const GrudgeBox = ({Id, PersonName, BadScore, GoodScore, SetEvilScore, SetGoodScore} : ICounterBoxModel) => {
  const [isHovered, setIsHoveredState] = useState<boolean>(false);

  // Edit Grudge Modal Window
  const [isEditGrudgeModalOpen, setIsEditGrudgeModalOpen] = useState(false);

  const handleOpenEditGrudgeModal = () => {
    setIsEditGrudgeModalOpen(true);
  };

  const handleCloseEditGrudgeModal = () => {
    setIsEditGrudgeModalOpen(false);
  };
  
  return (
    <>
      {isEditGrudgeModalOpen && (
        <Portal>
          <EditGrudgePanel handleCloseModal={handleCloseEditGrudgeModal} id={Id} />
        </Portal>
      )}

      <div key={Id} className={`${componentCSS.panel} ${componentCSS.panelShadow} ${grudgeBoxCSS.grudgeBox}`}
        onMouseEnter={() => setIsHoveredState(true)}
        onMouseLeave={() => setIsHoveredState(false)}
        >
        <div className={grudgeBoxCSS.gbheader}>
          <span style={{marginRight: "5px"}}>{PersonName}</span>

          <div className={`${isHovered ? globalCSS.visible : globalCSS.hidden}`}>
            <Button text='' icon={EditIcon} onClick={handleOpenEditGrudgeModal} onlyHoverShadow={true} />
          </div>
        </div>
        <div className={grudgeBoxCSS.gbScoreWrap}>
          <div className={grudgeBoxCSS.gbScore}>
            <div className={`${grudgeBoxCSS.gbScoreButton} ${isHovered ? globalCSS.visible : ''}`}>
              <Button text='' icon={AddIcon} onClick={() => SetEvilScore && SetEvilScore(Id, BadScore + 1)} />
            </div>
            <img src={DevilPng}/>
            {BadScore}
          </div>

          <div className={grudgeBoxCSS.gbScore}>
            {GoodScore}
            <img src={AngelPng}/>
            <div className={`${grudgeBoxCSS.gbScoreButton} ${isHovered ? globalCSS.visible : ''}`}>
              <Button text='' icon={AddIcon} onClick={() => SetGoodScore && SetGoodScore(Id, GoodScore + 1)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GrudgeBox