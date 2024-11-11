import { useDropdownContext } from '../Genre/DropdownContext';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import styles from '../Genre/Dropdown.module.css';

const Dropdown = () => {
  const { selectedGenre, toggleDropdown, isMenuOpen } = useDropdownContext();

  return (
    <div className={`${styles.dropdownContainer} ${isMenuOpen ? styles.open : ''}`}>
      <h3 className={styles.dropdownTitle}>Genres</h3>
      <DropdownButton selectedGenre={selectedGenre} onClick={toggleDropdown} />
      {isMenuOpen && <DropdownMenu />}
    </div>
  );
};

export default Dropdown;
