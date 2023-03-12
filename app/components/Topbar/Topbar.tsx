import styles from './Topbar.module.css';
import Link from "next/link";

export default function Topbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Link href="/smart" className={styles.link}>SMART.</Link>
                <Link href="/getwishing" className={styles.link}>King's Cup</Link>
                <Link href="/kingscup" className={styles.link}>GetWishing</Link>
            </div>
        </div>
    )
}

