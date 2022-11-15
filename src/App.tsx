import React, { useState } from 'react';
import './App.css';
import GrudgeList from './Components/GrudgeList';
import GeneralCounter from './Components/GeneralCounter';
import Button from './Components/Button';
import { CounterBoxModel } from './Model/CounterBoxModel';


const GrudgeCounter: React.FC = () => {
  const [totalGood, setTotalGood] = useState<number>(0);
  const [totaBad, setTotalBad] = useState<number>(0);
  const [allCounterCards, setAllCounterCards] = useState<CounterBoxModel>();

  return (
    <div className="app">
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
          <Button />
        </div>
        <GrudgeList />
      </div>
    </div>
  );
}

export default GrudgeCounter;
