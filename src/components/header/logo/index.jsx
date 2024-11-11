import styles from './logo.module.css';

export const Logo = () => (
  <div className={styles.logo}>
    <h1 className={styles.title}>QUICKBET</h1>
    <div className={styles.subtitleContainer}>
      <div className={styles.lineLeft}></div>
      <h2 className={styles.subtitle}>MOVIES</h2>
      <div className={styles.lineRight}></div>
    </div>
  </div>
);
