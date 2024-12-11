'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const trocarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={`${styles.header} ${menuAberto ? styles.headerExpandido : ''}`}>

            <div className={`${styles.logoDiv} ${menuAberto ? styles.esconderLogo : ''}`}>
                <Image className={styles.logo} src ='/images/logonj.png' alt="logo" width={140} height={90}></Image>
            </div>

            <div className={styles.menuLeft}>
                <button className={styles.menuIcon} onClick={trocarMenu} style={{ transform: menuAberto ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {menuAberto ? '✖' : '☰'}
                </button>
            </div>

            <nav className={`${styles.nav} ${menuAberto ? styles.mostrarMenu : ''}`}>
                <ul className={styles.ul}>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href='/'>Home</Link>
                    </li>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href="/listas">Listas</Link>
                    </li>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href="/props">Props</Link>
                    </li>
                    <li className={styles.gradient}>
                        <Link className={styles.links} href="/filtro">Filter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}