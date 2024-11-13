"use client"
import { useState, useContext } from 'react';
import { CityContext } from './context/CityContext';
import Location from './components/location/location';
import DataSelection from "./components/dataSelection/dataSelection";
import styles from './styles/page.module.css';

export default function Home() {
  const { selectedCity } = useContext(CityContext);
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isResidentsModalOpen, setIsResidentsModalOpen] = useState(false);

 

  return (
    <main>
      
      <div className={styles.container}>
        <Location 
          isTypeModalOpen={isTypeModalOpen}
          isDateModalOpen={isDateModalOpen}
          isResidentsModalOpen={isResidentsModalOpen}
        />
        <DataSelection 
          isTypeModalOpen={isTypeModalOpen} 
          setIsTypeModalOpen={setIsTypeModalOpen}
          isDateModalOpen={isDateModalOpen} 
          setIsDateModalOpen={setIsDateModalOpen}
          isResidentsModalOpen={isResidentsModalOpen} 
          setIsResidentsModalOpen={setIsResidentsModalOpen}
        />
      </div>
    </main>
  );
}
