import React, { useEffect, useState } from 'react';
import './App.css';
import GrudgeList from './Components/GrudgeList';
import GeneralCounter from './Components/GeneralCounter';
import Button from './Components/Button';
import { CounterBoxModel } from './Model/GCounterBoxModel';
import AddIcon from './Images/add.png'
import NewGrudgePanel from './Components/Modal/NewGrudgePanel';
import ReactDOM from 'react-dom';
import ModalProvider, { useModal } from './Components/Modal/ModalProvider';


const GrudgeCounter: React.FC = () => {
  const showNewGrudgePanel = useModal();

  const [totalGood, setTotalGood] = useState<number>(0);
  const [totaBad, setTotalBad] = useState<number>(0);
  const [allGrudgeBoxes, setGrudgeBoxes] = useState<CounterBoxModel[]>([]);

  useEffect(() => {
    setTotalBad(allGrudgeBoxes.reduce((total, currVal) => total + currVal.BadScore, 0))
    setTotalGood(allGrudgeBoxes.reduce((total, currVal) => total + currVal.GoodScore, 0))
  }, [allGrudgeBoxes])


  return (
    <div>
      <ModalProvider allGrudgeBoxes={allGrudgeBoxes} setGrudgeBoxes={setGrudgeBoxes}>
      <div className={`app`}>
        <div className='appContent'>
          <div className='header'>
            <span className="text">Grudge Counter</span>
          </div>
          <div className='generalPanel'>
            <div className='generalPanel_counters'>
              <span className="TotalCounter">Total</span>
              <GeneralCounter totalBad={totaBad} />
              <GeneralCounter totalGood={totalGood} />
            </div>
            <div style={{marginLeft: "margin-left: 1em;"}}>
              <Button text='Add New Grudge' icon={AddIcon} onClick={showNewGrudgePanel} />
            </div>
          </div>
          <GrudgeList allGrudgeBoxes={allGrudgeBoxes} setGrudgeBoxes={setGrudgeBoxes}/>
        </div>
      </div>
      </ModalProvider>
    </div>
  );
}

export default GrudgeCounter;
