import Navbar from "@/components/Header/Navbar";
import styles from './header.module.css';
import '../../app/globals.css';
import Link from 'next/link';
import Image from "next/image";
import logoImage from '@/public/logo/DALL_E_2023-_bright_colour_pigeon.png';
import {routes} from "@/datas/routes";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <Image className={styles.logoBlock__logo} src={logoImage} alt="Pigeon Logo" width={35} height={35}/>
                <Link className={styles.logoBlock__text}
                      href={routes.find(({name}) => name === "Home")!.path}><span
                    className={styles.logoBlock__firstName}>Edgars</span> Balodis</Link>
            </div>
            <Navbar/>
        </header>
    )
}