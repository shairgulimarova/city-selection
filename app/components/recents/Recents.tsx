import { useEffect, useState } from 'react';
import styles from "../../styles/recents.module.css";

const Recents = () => {
  const [recentSearches, setRecentSearches] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] =useState<string[]>([]); 
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [pets, setPets] = useState(0);

  useEffect(() => {
    // Загрузка типов жилья из localStorage
    const savedTypes = localStorage.getItem('selectedTypes');
    if (savedTypes) {
      setSelectedTypes(JSON.parse(savedTypes));
    }
    console.log("Selected Types:", savedTypes);
  
    // Загрузка данных жильцов из localStorage
    const savedResidentsData = localStorage.getItem('residentsData');
    if (savedResidentsData) {
      const parsedData = JSON.parse(savedResidentsData);
      setRooms(parsedData.rooms);
      setAdults(parsedData.adults);
      setChildren(parsedData.children);
      setBabies(parsedData.babies);
      setPets(parsedData.pets);
    }

    const savedSelectedDays = localStorage.getItem("selectedDays"); 
try {
  setSelectedDays(savedSelectedDays ? JSON.parse(savedSelectedDays) : []);
} catch (error) {
  console.error("Error parsing saved selected days:", error);
  setSelectedDays([]); 
}

    

    // Загрузка недавних поисков
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const clearSearches = () => {
    localStorage.removeItem('recentSearches');
    setRecentSearches([]);
  };

  return (
    <div className={styles.recents}>
      <div className="recent-search-header">
        <h2>Your recent search</h2>
        <button onClick={clearSearches}>Clear all</button>
      </div>
      <ul className="recents-list">
        {recentSearches.map((search, index) => (
          <li key={index}>
            <p>Type: {selectedTypes.join(', ') || 'Not specified'}</p>
            <p>Date:{selectedDays.join(', ') || 'Not specified'}</p>
            <p>Rooms: {rooms}, Adults: {adults}, Children: {children}, Babies: {babies}, Pets: {pets}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recents;
