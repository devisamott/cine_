import { useState } from "react";
import { Search } from "./Search/Search";
import Dropdown from "./Genre/Dropdown";
import { DropdownProvider } from "./Genre/DropdownContext";
import styles from '../FilterSidebar/FilterSidebar.module.css';
import hamburgerIcon from '../../assets/menu-burger.svg';

export const FilterSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <DropdownProvider>
      <div className={styles.hamburgerContainer}>
    
        <button onClick={toggleMenu} className={styles.hamburgerButton}>
          <img src={hamburgerIcon} alt="Menu" />
        </button>

        <div className={`${styles.FilterSidebar} ${isMenuOpen ? styles.showSidebar : ''}`}>
          <Search />
          <Dropdown />
        </div>
      </div>
    </DropdownProvider>
  );
};
