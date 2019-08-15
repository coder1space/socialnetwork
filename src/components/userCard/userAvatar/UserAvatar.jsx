import React from 'react';
import styles from './UserAvatar.module.scss';

function UserAvatar(props) {
    return (
        <div className={styles.userAvatar}>
            <img className={styles[props.size]} src="./images/userAvatar.jpg" alt=""/>
        </div>
    );
}

export default UserAvatar;