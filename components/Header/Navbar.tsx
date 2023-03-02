"use client";
import Link from "next/link";
import styles from './header.module.css';
import {routes} from "@/datas/routes";
import {FiMoon, FiSun} from "react-icons/fi";

const toggleTheme = (mode: string) => {
    // TODO: finish this function
    // @ts-ignore
    // const theme = document.querySelector('html').getAttribute('data-theme');
    const theme = mode;
    console.log(theme);
    if (!theme) {
        return ;
    }
    if (theme === 'light') {
        // @ts-ignore
        document.querySelector('html').setAttribute('data-theme', 'light');
        // localStorage.setItem('theme', 'light');
    } else {
        // @ts-ignore
        document.querySelector('html').setAttribute('data-theme', 'dark');
        // localStorage.setItem('theme', 'dark');
    }
}



export default function Navbar() {
    return (
        <nav className={styles.navigationBlock}>
            <div className={styles.themeBlock}>
                <button className={styles.themeButton} onClick={() => toggleTheme("dark")}>
                    <FiMoon className={styles.themeBlock__icon_active} size={22} />
                </button>
                <button className={styles.themeButton} onClick={() => toggleTheme("light")}>
                    <FiSun className={styles.themeBlock__icon} size={22}/>
                </button>
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