import styles from './Rating.module.css';

const RatingCircle = ({ rating }) => { 

  return (
    <div className={styles.ratingCircle}>
     <div
        className={styles.progressCircle}
        style={{
            '--progress': `${rating}%`,
            '--progress-color': rating >= 70 ? '#4caf50' : '#ff9800', 
            '--background-color': rating >= 70 ? '#226b24' : '#a36302',
        }}
    >
        <span className={styles.ratingText}>{rating}%</span>
      </div>
    </div>
  );
};

export default RatingCircle;
