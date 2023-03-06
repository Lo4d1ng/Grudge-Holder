import React, { useRef } from 'react';
import { CounterBoxModel } from '../../Model/GCounterBoxModel';
import Button from '../Button'
import AddIcon from '../../Images/add.png'
import '../Components.css';

interface Props{
    allGrudgeBoxes: CounterBoxModel[]
    setGrudgeBoxes: React.Dispatch<React.SetStateAction<CounterBoxModel[]>>
    setNewGrudgePanelShownState: (value: boolean) => void
  }

const NewGrudgePanel = ({allGrudgeBoxes, setGrudgeBoxes, setNewGrudgePanelShownState} : Props) => {  
    const personNameRef = useRef<HTMLInputElement>(null)

    function handleConfirm() {
        if(!personNameRef.current?.value) { return; }

        setGrudgeBoxes([...allGrudgeBoxes, { Id: allGrudgeBoxes.length + 1, PersonName: personNameRef.current?.value ?? "", BadScore: 0, GoodScore: 0}])
        setNewGrudgePanelShownState(false);
    }

  return (
    <div className='modal'>
        <div className=''></div>
        <div className='newGrudgeWindow panel'>
            <input ref={personNameRef}  type="text" id="12" required/>
            <Button text="Confirm" icon={AddIcon} onClick={handleConfirm} />
        </div>
    </div>
  );
}

export default NewGrudgePanel;

