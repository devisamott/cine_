import styles from './Search.module.css'
import search from '../../../assets/search.svg'

export const Search = () => {
    return (
        <div className={styles.Search}>
            <label className={styles.label}>Search</label>
            <div className={styles.formSearch}>
            <form >
                <input type="text" 
                    className={styles.inputSearch}
                    placeholder="Keywords"
                />
            </form>
                <img className={styles.botonSearch} src={search} alt="search" />
            </div>
        </div>
    )
}