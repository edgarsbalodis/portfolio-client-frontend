import Link from "next/link";
import styles from './header.module.css';
import {routes} from "@/datas/routes";
import {FiMoon, FiSun} from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className={styles.navigationBlock}>
            <div className={styles.themeBlock}>
                <FiMoon className={styles.themeBlock__icon_active} size={22}/>
                <FiSun className={styles.themeBlock__icon} size={22}/>
            </div>
            <ul className={styles.linkListBlock}>
                {
                    routes.map(({name, path}, idx) => (
                        <li key={idx}>
                            <Link className={styles.linkListBlock__link} href={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}