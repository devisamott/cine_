import { useDropdownContext } from '../Genre/DropdownContext';
import styles from '../Genre/DropdownMenu.module.css';

const DropdownMenu = () => {
  const { genres, handleGenreSelect } = useDropdownContext();

  return (
    <div className={styles.dropdownMenu}>
      {genres.map((genre) => (
        <div
          key={genre.id}
          className={styles.dropdownItem}
          onClick={() => handleGenreSelect(genre)} 
        >
          {genre.category}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
