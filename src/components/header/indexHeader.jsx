import { Logo } from "./logo"
import { Titles } from "./titles"
import { User } from "./user"
import styles from './indexHeader.module.css'

export const IndexHeader = () => {
    return (
        <header className={styles.indexHeader}>
            <div className={styles.logoTitlesContainer}>
                <Logo className={styles.logo}/>
                <Titles />
            </div>
            <User />
        </header>
    );
}