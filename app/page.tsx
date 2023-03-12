import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Lukas Michel</h1>
        <h3 className={styles.subtitle}>Problem Solver. Designer. Developer. <br />
            Indie App Maker. <br />
            Cloud Architect @MHP
        </h3>

        <button className={styles.primary_button}>Contact Me</button>
    </div>
  )
}
