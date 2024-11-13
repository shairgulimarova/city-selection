import Link from "next/link";
import { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import styles from "../../styles/location.module.css";
import Checkmark from "../../../public/checkmark-icon.svg";

interface LocationProps {
  isTypeModalOpen: boolean;
  isDateModalOpen: boolean;
  isResidentsModalOpen: boolean;
}

const Location: React.FC<LocationProps> = ({ isTypeModalOpen, isDateModalOpen, isResidentsModalOpen }) => {
 

  const { selectedCity } = useContext(CityContext);
  const isBlurred = isTypeModalOpen || isDateModalOpen || isResidentsModalOpen;

  console.log("Location isBlurred:", isBlurred);

  return (
    <div className={`${styles.firstBlock} ${isBlurred ? styles.blurred : ''}`}>
      <p className={styles.location}>Location</p>
      <div className={styles.locationContainer}>
        <Link href="/city-selection" className={styles.locationName}>
        {selectedCity ? (
        <p> {selectedCity}</p>
      ) : "Choose the location"}
        </Link>
        <Link href="/city-selection">
          <Checkmark />
        </Link>
      </div>
    </div>
  );
}
export default Location;
