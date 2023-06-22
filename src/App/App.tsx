import { useEffect, useState } from 'react';
import globalCSS from '../global.module.css'
import css from './App.module.css'
import GrudgeList from '../Components/GrudgeList/GrudgeList'
import GeneralCounter from '../Components/GeneralCounter/GeneralCounter'
import Button from '../Components/Button/Button'
import { ICounterBoxModel } from '../Model/ICounterBoxModel'
import useAppModelContext from "../context"
import AddIcon from '../Images/add.png'
import Portal from '../Components/Modal/ModalPortal';
import NewGrudgePanel from '../Components/Modal/NewGrudgePanel';

const App = () => {
  const [allGrudgeBoxes, setGrudgeBoxes] = useState<ICounterBoxModel[]>([])
  const [totalGood, setTotalGood] = useState<number>(0)
  const [totaBad, setTotalBad] = useState<number>(0)

  //Modal
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false)
  const [isNewGrudgeModalOpen, setIsNewGrudgeModalOpen] = useState(false)

  const handleOpenNewGrudgeModal = () => {
    setIsNewGrudgeModalOpen(true)
  };

  const handleCloseNewGrudgeModal = () => {
    setIsNewGrudgeModalOpen(false)
  };

  useEffect(() => {
    setTotalBad(allGrudgeBoxes.reduce((total, currVal) => total + currVal.BadScore, 0))
    setTotalGood(allGrudgeBoxes.reduce((total, currVal) => total + currVal.GoodScore, 0))
  }, [allGrudgeBoxes])

  const AppData = {allGrudgeBoxes, setGrudgeBoxes, setIsFullScreenModalOpen};

  return (
    <>
      <div id="portal-root"></div>
      <div className={`${isFullScreenModalOpen ? globalCSS.modalBlur : ''}`}>
        <div className={css.app}>
        <useAppModelContext.Provider value={AppData}>
          <div className={css.appContent}>
            <div className={css.header}>
              <span className={css.headerText}>Grudge Counter</span>
            </div>
            <div className={css.generalPanel}>
              <div className={css.generalPanel_counters}>
                <span className={css.TotalCounter}>Total</span>
                <GeneralCounter totalBad={totaBad} />
                <GeneralCounter totalGood={totalGood} />
              </div>
              <div style={{marginLeft: "1em"}}>
                <Button text="Add New Grudge" icon={AddIcon} onClick={() => handleOpenNewGrudgeModal()} />

                {isNewGrudgeModalOpen && (
                  <Portal>
                    <NewGrudgePanel handleCloseModal={handleCloseNewGrudgeModal} />
                  </Portal>
                )}
              </div>
            </div>
            <GrudgeList />
          </div>
          </useAppModelContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
