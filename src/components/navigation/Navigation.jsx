import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navigation.module.scss';
import {NavLink} from "react-router-dom";
import {
    faCircle,
    faComments,
    faHeadphonesAlt,
    faHomeAlt,
    faNewspaper, faPlay,
    faUserAlt,
    faWrench
} from "@fortawesome/pro-solid-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navItems}>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/home"><FontAwesomeIcon icon={faHomeAlt} fixedWidth color="white"/>Home</NavLink></li>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/profile"><FontAwesomeIcon icon={faUserAlt} fixedWidth color="white"/>My profile</NavLink></li>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/messages"><FontAwesomeIcon icon={faComments} fixedWidth color="white"/>Messages</NavLink></li>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/news"><FontAwesomeIcon icon={faNewspaper} fixedWidth color="white"/>News</NavLink></li>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/music"><FontAwesomeIcon icon={faHeadphonesAlt} fixedWidth color="white"/>Music</NavLink></li>
                <li className={styles.navItem}><NavLink className={styles.navLink} activeClassName={styles.active} to="/settings"><FontAwesomeIcon icon={faWrench} fixedWidth color="white"/>Settings</NavLink></li>
            </ul>

        </nav>
    );
}

export default Navigation;