import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { CounterBoxModel } from '../../Model/GCounterBoxModel';
import Button from '../Button'
import AddIcon from '../../Images/add.png'
import '../Components.css';
import NewGrudgePanel from './NewGrudgePanel';

interface WrapperProps {
    allGrudgeBoxes: CounterBoxModel[]
    setGrudgeBoxes: React.Dispatch<React.SetStateAction<CounterBoxModel[]>>
    children: React.ReactNode;
  }

const ModalContext = createContext(() => {console.log('default')});

const ModalProvider = ({children, allGrudgeBoxes, setGrudgeBoxes} : WrapperProps ) => {  
    const [isModalWindowShown, setNewIsModalWindowShownState] = useState<boolean>(false);
    const [isNewGrudgePanelShown, setNewGrudgePanelShownState] = useState<boolean>(false);
    
    /*
    const showGrudgePanel:ModalHandler = () => {
        console.log('2');
        setNewGrudgePanelShownState(true);
        setNewIsModalWindowShownState(isNewGrudge
          PanelShown);
    };

*/
    function handleClick() {
        console.log("Clicked!");
    }

  return (
    <div className='test'>
        <div id='ModalWidowsWrapper'>
        {
          isNewGrudgePanelShown ? <NewGrudgePanel allGrudgeBoxes={allGrudgeBoxes} setGrudgeBoxes={setGrudgeBoxes}  setNewGrudgePanelShownState={setNewGrudgePanelShownState}/> : null
        }
        </div>
        <div className={`${isModalWindowShown ? 'modal-bg-blur' : ''}`}>
        <ModalContext.Provider value={handleClick}>
            {children}
        </ModalContext.Provider>
        </div>
    </div>
  );
}

export const useModal = () => {
    return useContext(ModalContext);
};
  

export default ModalProvider;

