import styles from './titles.module.css'

export const Titles = () => {
    return(
        <div className={styles.titles}>
            <p className={styles.text}>Popular</p>
            <p className={styles.text}>Favorites</p>
        </div>
    )
}