import favorite from '../../../src/assets/favorite.svg'
import styles from '../favorite/favorite.module.css'

export const Favorite = () => {
    return (
        <img 
            className={styles.favorite}
            src={favorite} alt="" 
        />
    )
}