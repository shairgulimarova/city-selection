import React, { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import DatesIcon from "@/public/homePageIcon/dates.svg";
import NavigationIcon from "@/public/goback-icon.svg";
import styles from "../../styles/threeModals/date.module.css";

type DateModalProps = {
  blurred: boolean;
  isDateModalOpen: boolean;
  setIsDateModalOpen: (isOpen: boolean) => void;
};

export default function DateModal({ blurred, isDateModalOpen, setIsDateModalOpen }: DateModalProps) {
  const [selectedDays, setSelectedDays] = useState<DateRange | undefined>();
  const [month, setMonth] = useState(new Date());
  const [isFlexible, setIsFlexible] = useState(false);

  const closeDateModal = () => setIsDateModalOpen(false);

  const handleApplyClick3 = () => {
    localStorage.setItem('selectedDays', JSON.stringify(selectedDays));
    setIsDateModalOpen(false);
  };

  const handleDateChange = (range: DateRange | undefined) => setSelectedDays(range);

  const handlePrevMonth = () => {
    setMonth(prevMonth => {
      const month = new Date(prevMonth);
      month.setMonth(month.getMonth() - 1);
      return month;
    });
  };

  const handleNextMonth = () => {
    setMonth(prevMonth => {
      const month = new Date(prevMonth);
      month.setMonth(month.getMonth() + 1);
      return month;
    });
  };

  const monthCaptionStyle = {
    display: "none"
  };

  return (
    <>
      <div className={`${styles.secondBlock} ${blurred ? styles.blurred : ''}`}>       
        <div className={styles.datesContainer} onClick={() => setIsDateModalOpen(true)}>
          <DatesIcon />
          <p>{selectedDays ? `${selectedDays.from?.toLocaleDateString()} - ${selectedDays.to?.toLocaleDateString()}` : 'Dates'}</p>
        </div>
      </div>

      {isDateModalOpen && (
        <div className={styles.dateModalOverlay} onClick={closeDateModal}>
          <div className={styles.dateModal} onClick={(e) => e.stopPropagation()}>
            <p className={styles.bookingLabel}>You are booking for</p>
            <div className={styles.calendar}>
              <div className={styles.header}>
                <button className={styles.prevNav} onClick={handlePrevMonth}>
                  <NavigationIcon />
                </button>
                <p className={styles.monthLabel}>{month.toLocaleString('en-ru', { month: 'long', year: 'numeric' })}</p>
                <button className={styles.nextNav} onClick={handleNextMonth}>
                  <NavigationIcon />
                </button>
              </div>
              <DayPicker
                mode="range"
                selected={selectedDays}
                onSelect={handleDateChange}
                month={month} 
                hideNavigation
                showOutsideDays   
                className={styles.dayPicker}
                styles={{
                  month_caption: monthCaptionStyle
                }} 
              />
            </div>
            <div className={styles.flexibleContainer}>
              <label>I am flexible</label>
              <input
                type="checkbox"
                checked={isFlexible}
                onChange={() => setIsFlexible(prev => !prev)} 
              />
            </div>
            <button className={styles.applyBtn} onClick={handleApplyClick3}>Apply</button>
          </div>
        </div>
      )}
    </>
  );
}
