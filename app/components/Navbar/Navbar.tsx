import styles from './Navbar.module.css';
import Link from "next/link";

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/" className={styles.link}>Contact</Link>
            </div>
        </div>
    )
}