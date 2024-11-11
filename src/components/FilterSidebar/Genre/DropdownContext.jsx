import { createContext, useState, useContext, useEffect } from 'react';
import { getProductos } from '../../services/api';

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [genres, setGenres] = useState([]); 
  const [selectedGenre, setSelectedGenre] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getProductos();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre); 
  };
  

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <DropdownContext.Provider value={{
      genres,
      selectedGenre,
      handleGenreSelect,
      toggleDropdown,
      isMenuOpen,
    }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};
