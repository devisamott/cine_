import { useDropdownContext } from './DropdownContext';
import styles from '../Genre/DropdownButton.module.css'
import arrow from '/src/assets/arrow.svg'

const DropdownButton = () => {
  const { selectedGenre, toggleDropdown } = useDropdownContext();

  return (
    <button className={styles.dropdownButton} onClick={toggleDropdown}>
      <span className={styles.dropdownPlaceholder}>
        {selectedGenre ? selectedGenre.category : 'Select Genre'}
      </span>
      <span className={styles.dropdownIcon}><img src={arrow} alt="" /></span>
    </button>
  );
};

export default DropdownButton;
