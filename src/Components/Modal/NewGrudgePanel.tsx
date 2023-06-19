import React, { useContext, useEffect, useRef } from 'react';
import { ICounterBoxModel } from '../../Model/GCounterBoxModel';
import Button from '../Button/Button'
import AddIcon from '../../Images/add.png'
import closeIcon from '../../Images/cross.svg'
import componentCSS from '../Components.module.css';
import Context from '../../context';

interface Props{
  handleCloseModal: () => void
}

const NewGrudgePanel = ({handleCloseModal} : Props) => {  
    const grudgeListModel = useContext(Context);
    const personNameRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
      personNameRef.current?.focus();
      console.log(personNameRef.current);
    }, [])

    function handleConfirm() {
        //Dodat chybovou hlašku
        if(!personNameRef.current?.value) { return; }

        grudgeListModel?.setGrudgeBoxes([...grudgeListModel.allGrudgeBoxes, { Id: grudgeListModel.allGrudgeBoxes.length + 1, PersonName: personNameRef.current?.value ?? "", BadScore: 0, GoodScore: 0}])
        handleCloseModal();
    }

  return (
    <div className={`${componentCSS.newGrudgeWindow} ${componentCSS.panel}`}>
        <input ref={personNameRef}  type="text" id="NewGrudgeNameId" maxLength={15} required/>
        <div className={componentCSS.newGrudgeWindowModalActionWrapper}>
          <Button text="Confirm" icon={AddIcon} onClick={handleConfirm} />
          <Button text="Cancel" icon={closeIcon} onClick={handleCloseModal} />
        </div>
    </div>
  );
}

export default NewGrudgePanel;

