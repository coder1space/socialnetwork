import React from 'react';
import styles from '../Messages.module.scss';

function Dialog(props) {
    let messages = props.messages.map( message => <div className={`${styles.message} ${(message.my)?styles.mine:'notMine'}`}>{message.message}</div> )

    return (
        <div id={props.ID} className={styles.dialog}>
            <div className={styles.contact}>{props.contact}</div>
            <div className={styles.messages}>
                {messages}
            </div>

        </div>
    );
}

export default Dialog;