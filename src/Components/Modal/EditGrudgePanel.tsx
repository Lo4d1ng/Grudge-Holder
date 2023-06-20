import React, { useContext, useEffect, useRef } from 'react';
import { ICounterBoxModel } from '../../Model/GCounterBoxModel';
import Button from '../Button/Button'
import AddIcon from '../../Images/add.png'
import closeIcon from '../../Images/cross.svg'
import componentCSS from '../Components.module.css';
import Context from '../../context';

interface IProps{
  id: number
  handleCloseModal: () => void
}

const NewGrudgePanel = ({id, handleCloseModal} : IProps) => {  
    const AppModel = useContext(Context)
    const personNameRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      if(!personNameRef.current) { return; }

      personNameRef.current.focus()
      personNameRef.current.value = AppModel?.allGrudgeBoxes.find(box => box.Id == id)?.PersonName ?? ""

      AppModel?.setIsFullScreenModalOpen(true)

      return(() => {AppModel?.setIsFullScreenModalOpen(false)})
    })

    function handleConfirm() {
        if(!personNameRef.current) { return; }

        const updatedGrudgeBoxes = AppModel?.allGrudgeBoxes.map((box) => ({...box, PersonName: box.Id == id ? personNameRef.current?.value ?? "" : box.PersonName}))
        if(updatedGrudgeBoxes != undefined)
          AppModel?.setGrudgeBoxes(updatedGrudgeBoxes)

        handleCloseModal();
    }

  return (
    <div className={`${componentCSS.newGrudgeWindow} ${componentCSS.panel} ${componentCSS.panelShadow}`}>
        <input ref={personNameRef}  type="text" id="NewGrudgeNameId" maxLength={15} required autoFocus/>
        <div className={componentCSS.newGrudgeWindowModalActionWrapper}>
          <Button text="Confirm" icon={AddIcon} onClick={handleConfirm} />
          <Button text="Cancel" icon={closeIcon} onClick={handleCloseModal} />
        </div>
    </div>
  );
}

export default NewGrudgePanel;

