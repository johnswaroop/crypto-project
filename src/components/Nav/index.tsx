import React from 'react';
import { FC } from 'react';
import styles from './nav.module.scss'
import assets from '../../assets'
import { useState } from 'react';
import darkModeUtility from './../../utility/darkMode.utility'
interface Props {
    routes: string[],
    activeRoute: string
}

const Nav: FC<Props> = ({ activeRoute, routes }) => {

    const [darkMode, setDarkmode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkmode((mode) => {
            darkModeUtility(mode);
            return !mode;
        })
    }

    return (
        <div className={styles.nav}>
            <span className={styles.logo}>
                <img src={assets.logo} alt="" />
            </span>
            <ul className={styles.routes}>
                {
                    routes.map((route: string) => {
                        if (activeRoute == route) return <li className={styles.activeRoute}>{route}</li>
                        else return <li>{route}</li>
                    })
                }
            </ul>
            <button className={styles.walletBtn}>Connect to wallet</button>
            <span className={styles.darkModeIcon} onClick={handleDarkMode}>
                {darkMode ?
                    <img src={assets.darkMode} /> :
                    <img src={assets.lightMode} />}
            </span>
            <button className={styles.language}></button>
        </div>

    );
}
export default Nav;