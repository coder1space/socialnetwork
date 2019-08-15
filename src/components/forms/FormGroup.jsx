import React from 'react';
import styles from './Forms.module.scss';

function FormGroup(props) {
    return (
        <div className={styles.formGroup}>
            {props.children}
        </div>
    );
}

export default FormGroup;