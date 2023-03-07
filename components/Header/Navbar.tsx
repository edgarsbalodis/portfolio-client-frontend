"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from './header.module.css';
import {routes} from "@/datas/routes";
import {FiMoon, FiSun} from "react-icons/fi";
import ThemeModeEnum from "@/enums/themeModeEnum";

const getThemeButtonContent = (currentTheme: string) => {
    if (!currentTheme) return {
        icon: null,
        newTheme: null,
    };
    switch (currentTheme) {
        case ThemeModeEnum.LIGHT:
            return {
                icon: <FiMoon className={styles.themeBlock__icon} size={22}/>,
                newTheme: ThemeModeEnum.DARK
            };
        case ThemeModeEnum.DARK:
            return {
                icon: <FiSun className={styles.themeBlock__icon} size={22}/>,
                newTheme: ThemeModeEnum.LIGHT
            };
        default:
            return {
                icon: null,
                newTheme: null,
            }
    }
}

export default function Navbar() {

    // this function is used to set theme mode
    // it also saves theme mode to local storage and changes state
    const setThemeMode = (mode: ThemeModeEnum) => {
        const htmlElement: HTMLElement | null = document.querySelector('html');
        if (!htmlElement) return;

        if (mode === ThemeModeEnum.LIGHT) {
            htmlElement.setAttribute('data-theme', ThemeModeEnum.LIGHT);
            setTheme(ThemeModeEnum.LIGHT);
            localStorage.setItem('theme', ThemeModeEnum.LIGHT);
        } else {
            htmlElement.setAttribute('data-theme', ThemeModeEnum.DARK);
            setTheme(ThemeModeEnum.DARK);
            localStorage.setItem('theme', ThemeModeEnum.DARK);
        }
    }
    // need to get theme from local storage
    // if there is no theme in local storage, get theme from user's system
    // if there is no theme in user's system, use dark theme
    // TODO: fix this logic, so there is only logic for changing theme not for getting theme
    const defaultTheme: ThemeModeEnum = (localStorage.getItem('theme') as ThemeModeEnum) ? localStorage.getItem('theme') as ThemeModeEnum : window.matchMedia("(prefers-color-scheme: light)").matches ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;

    useEffect(() => {
        const htmlElement: HTMLElement | null = document.querySelector('html');
        if (!htmlElement) return;
        htmlElement.setAttribute('data-theme', defaultTheme);
        setTheme(defaultTheme);
    }, [defaultTheme]);
    const [theme, setTheme] = useState(defaultTheme);

    const {icon, newTheme} = getThemeButtonContent(theme);

    return (
        <nav className={styles.navigationBlock}>
            <div className={styles.themeBlock}>
                <button className={styles.themeButton} onClick={() => setThemeMode(newTheme!)}>
                    {icon}
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