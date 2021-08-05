import React from 'react';
import { FC } from 'react';
import styles from './nav.module.scss'
import assets from '../../assets'

interface Props {
    routes: string[],
    activeRoute: string
}

const Nav: FC<Props> = ({ activeRoute, routes }) => {


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
            <button className={styles.language}></button>
        </div>

    );
}
export default Nav;