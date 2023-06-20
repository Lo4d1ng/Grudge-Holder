import React, { useContext, useEffect, useRef } from 'react';
import { ICounterBoxModel } from '../../Model/GCounterBoxModel';
import Button from '../Button/Button'
import AddIcon from '../../Images/add.png'
import closeIcon from '../../Images/cross.svg'
import componentCSS from '../Components.module.css';
import Context from '../../context';

interface IProps{
  handleCloseModal: () => void
}

const NewGrudgePanel = ({handleCloseModal} : IProps) => {  
    const AppModel = useContext(Context);
    const personNameRef = useRef<HTMLInputElement>(null)
  
    useEffect(() => {
      personNameRef.current?.focus();
      AppModel?.setIsFullScreenModalOpen(true)

      return(() => {AppModel?.setIsFullScreenModalOpen(false)})
    })

    function handleConfirm() {
        if(!personNameRef.current?.value) { return; }
        
        AppModel?.setGrudgeBoxes([...AppModel.allGrudgeBoxes, { Id: AppModel.allGrudgeBoxes.length + 1, PersonName: personNameRef.current?.value ?? "", BadScore: 0, GoodScore: 0}])
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

