import React from 'react';
import styles from './Posts.module.scss';
import UserAvatar from "../userCard/userAvatar/UserAvatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/pro-duotone-svg-icons";

function Post(props) {
    return (
        <div id={props.ID} className={styles.post}>
            <UserAvatar size="small"/>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.likes}><FontAwesomeIcon icon={faThumbsUp}/>&nbsp;{props.likes}</div>
        </div>
    );
}

export default Post;