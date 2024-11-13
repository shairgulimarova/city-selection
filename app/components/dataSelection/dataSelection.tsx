// DataSelection.tsx
import React from 'react';
import HouseTypeModal from './HouseTypeModal';
import DateModal from './DateModal';
import ResidentsModal from './ResidentsModal';
import styles from "../../styles/data.module.css";

type DataSelectionProps = {
  isTypeModalOpen: boolean;
  setIsTypeModalOpen: (isOpen: boolean) => void;
  isDateModalOpen: boolean;
  setIsDateModalOpen: (isOpen: boolean) => void;
  isResidentsModalOpen: boolean;
  setIsResidentsModalOpen: (isOpen: boolean) => void;
};

export default function DataSelection({
  isTypeModalOpen,
  setIsTypeModalOpen,
  isDateModalOpen,
  setIsDateModalOpen,
  isResidentsModalOpen,
  setIsResidentsModalOpen,
}: DataSelectionProps) {


  return (
    <div className={styles.dataSelectionContainer}>
      <HouseTypeModal 
        isTypeModalOpen={isTypeModalOpen} 
        setIsTypeModalOpen={setIsTypeModalOpen} 
        blurred={isDateModalOpen || isResidentsModalOpen} 
      />
      <DateModal 
        blurred={isTypeModalOpen || isResidentsModalOpen} 
        isDateModalOpen={isDateModalOpen} 
        setIsDateModalOpen={setIsDateModalOpen} 
      />
      <ResidentsModal 
        blurred={isTypeModalOpen || isDateModalOpen} 
        isResidentsModalOpen={isResidentsModalOpen} 
        setIsResidentsModalOpen={setIsResidentsModalOpen} 
      />
    </div>
  );
}
