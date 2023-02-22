import styles from './footer.module.css';
import '../../app/globals.css';
export default function Footer() {
    return (
        <footer className={styles.sectionFooter}>
            <div className={styles.abstractLine} />

            <div className={styles.navigation}>
                <div className={styles.navigationLeft}>
                    <div className={styles.navigationCopyRight}>
                        <span className={`${styles.copyRightYear} mr-3`}>© 2023</span>
                        <p className={styles.copyRightText}>Edgars Balodis</p>
                    </div>
                </div>
                <div className={styles.navigationCenter}>
                    <div className={styles.navigationLinks}>
                        <ul className={styles.links}>
                            <li className={styles.link}>Privacy Policy</li>
                            <li className={styles.link}>Terms Of Use</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.navigationRight} />
            </div>

        </footer>
    );
}