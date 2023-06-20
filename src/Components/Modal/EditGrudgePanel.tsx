import React, { useContext, useEffect, useRef } from 'react';
import { ICounterBoxModel } from '../../Model/ICounterBoxModel';
import Button from '../Button/Button'
import AddIcon from '../../Images/add.png'
import closeIcon from '../../Images/cross.svg'
import componentCSS from '../Components.module.css';
import Context from '../../context';

interface IProps{
  id: number
  handleCloseModal: () => void
}

const EditGrudgePanel = ({id, handleCloseModal} : IProps) => {  
    const appModel = useContext(Context)
    const personNameRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      if(!personNameRef.current) { return; }

      personNameRef.current.focus()
      personNameRef.current.value = appModel?.allGrudgeBoxes.find(box => box.Id == id)?.PersonName ?? ""

      appModel?.setIsFullScreenModalOpen(true)

      return(() => {appModel?.setIsFullScreenModalOpen(false)})
    })

    function handleConfirm() {
        if(!personNameRef.current) { return; }

        const updatedGrudgeBoxes = appModel?.allGrudgeBoxes.map((box) => ({...box, PersonName: box.Id == id ? personNameRef.current?.value ?? box.PersonName : box.PersonName}))
        
        if(updatedGrudgeBoxes != undefined)
          appModel?.setGrudgeBoxes(updatedGrudgeBoxes)

        handleCloseModal();
    }

  return (
    <div className={`${componentCSS.newGrudgeWindow} ${componentCSS.panel} ${componentCSS.panelShadow}`}>
        <input ref={personNameRef} autoComplete="off" type="text" id="NewGrudgeNameId" maxLength={15} required autoFocus/>
        <div className={componentCSS.newGrudgeWindowModalActionWrapper}>
          <Button text="Confirm" icon={AddIcon} onClick={handleConfirm} />
          <Button text="Cancel" icon={closeIcon} onClick={handleCloseModal} />
        </div>
    </div>
  );
}

export default EditGrudgePanel;

