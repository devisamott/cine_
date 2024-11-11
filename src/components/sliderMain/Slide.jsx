/* eslint-disable react/prop-types */
import { Favorite } from '../favorite/favorite';
import RatingCircle from './Rating/RatingCircule';
import styles from './Slide.module.css';

export const Slide = ({ slide, isActive }) => {
  return (
    <div 
    className={`${styles.slide} ${isActive ? styles.active : ''}`} 
    >
        <img src={slide.img} alt={slide.name} className={styles.image} />
        <p className={styles.caption}>{slide.name}</p>
        <p className={styles.description}>{slide.description}</p>
        <Favorite />
        <RatingCircle rating={slide.rating}/>
    </div>
  );
};
