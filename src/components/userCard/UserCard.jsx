import React from 'react';
import styles from './UserCard.module.scss';
import UserAvatar from "./userAvatar/UserAvatar";

function UserCard() {
    return (
        <div className={styles.userCard}>

            <div className={styles.banner}><img src="./images/userBanner.jpg" alt=""/></div>
            <div className={styles.userInfo}>
                <UserAvatar/>
                <div className={styles.userName}>Mourat Boutry</div>
            </div>
        </div>
    );
}

export default UserCard;