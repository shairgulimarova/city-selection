import React, { useState } from 'react';
import styles from "../../styles/threeModals/type.module.css";
import HousesIcon from "@/public/homePageIcon/houses.svg"; 
import ApartmentIcon from "@/public/homePageIcon/Apartment.svg";
import HotelIcon from "@/public/homePageIcon/Hotel.svg";

type HouseTypeModalProps = {
  isTypeModalOpen: boolean;
  setIsTypeModalOpen: (open: boolean) => void;
  blurred: boolean; 
};

export default function HouseTypeModal({ isTypeModalOpen, setIsTypeModalOpen, blurred }: HouseTypeModalProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleApplyClick1 = () => {
    localStorage.setItem('selectedTypes', JSON.stringify(selectedTypes));
    setIsTypeModalOpen(false);
  };

  const handleCheckboxChange = (type: string) => {
    setSelectedTypes(prevSelectedTypes =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter(item => item !== type)
        : [...prevSelectedTypes, type]
    );
  };

  return (
    <>
      <div className={`${styles.secondBlock} ${isTypeModalOpen ? styles.blur : ''}`}>
        <p className={styles.selectionTitle}>Enter selection data</p>
        <div className={styles.housesContainer} onClick={() => setIsTypeModalOpen(true)}>
          <HousesIcon />
          <p>{selectedTypes.length > 0 ? selectedTypes.join(', ') : 'Type of dwelling you need'}</p>
        </div>
      </div>

     
      {isTypeModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsTypeModalOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <p>Type of dwelling</p>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <HousesIcon />
                <p>House</p>
                <input 
                  type="checkbox" 
                  value="House" 
                  onChange={() => handleCheckboxChange('House')}
                  checked={selectedTypes.includes('House')}
                />
              </label>
              <label className={styles.checkboxLabel}>
                 <ApartmentIcon className={styles.apartmentIcon} />
                 Apartment
                 <input 
                   type="checkbox" 
                  value="Apartment" 
                   onChange={() => handleCheckboxChange('Apartment')}
                   checked={selectedTypes.includes('Apartment')}
                />
               </label>
               <label className={styles.checkboxLabel}>
                 <HotelIcon className={styles.hotelIcon}/>
                 Hotel
                 <input 
                   type="checkbox" 
                   value="Hotel" 
                 onChange={() => handleCheckboxChange('Hotel')}
                 checked={selectedTypes.includes('Hotel')}
                />
              </label>
            </div>
            <button onClick={handleApplyClick1} className={styles.applyBtn}>Apply</button>
          </div>
        </div>
      )}
    </>
  );
}
