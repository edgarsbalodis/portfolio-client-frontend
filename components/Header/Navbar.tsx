import Link from "next/link";
import styles from './header.module.css';
import {routes} from "@/datas/routes";
import {FiMoon, FiSun} from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className={styles.navigationBlock}>
            <div className={styles.navigationBlock__themeBlock}>
                <FiMoon className={styles.navigationBlock__themeBlock_iconActive} size={22}/>
                <FiSun className={styles.navigationBlock__themeBlock_icon} size={22}/>
            </div>
            <ul className={styles.navigationBlock__linkList}>
                <li><Link className={styles.navigationBlock__linkList_link} href={routes.WORK}>Works</Link></li>
                <li><Link className={styles.navigationBlock__linkList_link} href={routes.ABOUT}>About</Link></li>
                <li><Link className={styles.navigationBlock__linkList_link} href={routes.CONTACT}>Contacts</Link></li>
                <li><Link className={styles.navigationBlock__linkList_link} href={routes.BLOG}>Blog</Link></li>
            </ul>
        </nav>
    )
}