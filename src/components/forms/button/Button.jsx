import React from 'react';
import styles from './Button.module.scss';

/**
 *
 * @param props type, text
 * @returns {*}
 * @constructor
 */
function Button(props) {

    let addPost = ()=> {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <button onClick={ addPost } className={`${styles.btn} ${styles[props.type]}`}>{props.text}</button>
    );
}

export default Button;