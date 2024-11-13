import React, { useState } from 'react';
import styles from "../../styles/threeModals/residents.module.css"; 
import ResidentsIcon from "@/public/homePageIcon/residents.svg";


type ResidentsModalProps = {
  isResidentsModalOpen: boolean;
  setIsResidentsModalOpen: (open: boolean) => void;
  blurred: boolean; // Добавляем свойство blurred
};

export default function ResidentsModal({ blurred, isResidentsModalOpen, setIsResidentsModalOpen }: ResidentsModalProps) {
 
  const [localSelectionData, setLocalSelectionData] = useState({
    rooms: 0,
    adults: 0,
    children: 0,
    babies: 0,
    pets: 0,
  });

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [pets, setPets] = useState(0);

  const handleApplyClick2 = () => {
    const residentsData = {
      rooms,
      adults,
      children,
      babies,
      pets,
    };

    localStorage.setItem('residentsData', JSON.stringify(residentsData));
    setLocalSelectionData(residentsData);
    setIsResidentsModalOpen(false);
  };

  return (
    <>
      <div className={`${styles.secondBlock} ${isResidentsModalOpen ? styles.blurred : ''}`}>
          <div className={styles.residentsContainer} onClick={() => setIsResidentsModalOpen(true)}>
            <ResidentsIcon />
            <p>
              {localSelectionData.rooms === 0 && localSelectionData.adults === 0 && localSelectionData.children === 0 && localSelectionData.babies === 0 && localSelectionData.pets === 0 
                ? "Residents" 
                : `Room - ${localSelectionData.rooms}, Adult - ${localSelectionData.adults}, Children - ${localSelectionData.children}, Baby - ${localSelectionData.babies}, Pet - ${localSelectionData.pets}`}
            </p>
          </div>
        </div>
      

      {isResidentsModalOpen && (
        <div className={styles.residentsModalOverlay} onClick={() => setIsResidentsModalOpen(false)}>
          <div className={styles.residentsModal} onClick={e => e.stopPropagation()}>
            <p>Number of residents</p>
            <div className={styles.counterGroup}>
              <div className={styles.counter}>
                <span>Rooms</span>
                <button onClick={() => setRooms(rooms > 0 ? rooms - 1 : 0)}>&minus;</button>
                <span>{rooms}</span>
                <button onClick={() => setRooms(rooms + 1)}>&#43;</button>
              </div>
              <div className={styles.counter}>
                <span>Adults</span>
                <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>&minus;</button>
                <span>{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>&#43;</button>
              </div>
              <div className={styles.counter}>
                <span>Children</span>
                <button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>&minus;</button>
                <span>{children}</span>
                <button onClick={() => setChildren(children + 1)}>&#43;</button>
              </div>
              <div className={styles.counter}>
                <span>Babies</span>
                <button onClick={() => setBabies(babies > 0 ? babies - 1 : 0)}>&minus;</button>
                <span>{babies}</span>
                <button onClick={() => setBabies(babies + 1)}>&#43;</button>
              </div>
              <div className={styles.counter}>
                <span>Pets</span>
                <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>&minus;</button>
                <span>{pets}</span>
                <button onClick={() => setPets(pets + 1)}>&#43;</button>
              </div>
            </div>
            <button className={styles.applyBtn} onClick={handleApplyClick2}>Apply</button>
          </div>
        </div>
      )}
    </>
  );
}
