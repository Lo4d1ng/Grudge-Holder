import React, { useContext, useEffect, useRef } from 'react';
import { ICounterBoxModel } from '../../Model/ICounterBoxModel';
import Button from '../Button/Button'
import AddIcon from '../../Images/add.png'
import closeIcon from '../../Images/cross.svg'
import componentCSS from '../Components.module.css';
import Context from '../../context';

interface IProps{
  handleCloseModal: () => void
}

const NewGrudgePanel = ({handleCloseModal} : IProps) => {  
    const appModel = useContext(Context);
    const personNameRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      personNameRef.current?.focus();
      appModel?.setIsFullScreenModalOpen(true)

      return(() => {appModel?.setIsFullScreenModalOpen(false)})
    })

    function handleConfirm() {
        if(!personNameRef.current?.value) { return; }
        
        appModel?.setGrudgeBoxes([...appModel.allGrudgeBoxes, { Id: appModel.allGrudgeBoxes.length + 1, PersonName: personNameRef.current?.value ?? "", BadScore: 0, GoodScore: 0}])
        handleCloseModal();
    }

  return (
    <div className={`${componentCSS.newGrudgeWindow} ${componentCSS.panel} ${componentCSS.panelShadow}`}>
        <input ref={personNameRef} autoComplete="off" type="text" id="NewGrudgeNameId" maxLength={15} required autoFocus />
        <div className={componentCSS.newGrudgeWindowModalActionWrapper}>
          <Button text="Confirm" icon={AddIcon} onClick={handleConfirm} />
          <Button text="Cancel" icon={closeIcon} onClick={handleCloseModal} />
        </div>
    </div>
  );
}

export default NewGrudgePanel;

