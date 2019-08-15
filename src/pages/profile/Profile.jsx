import React from 'react';
import styles from './Profile.module.scss';
import UserCard from "../../components/userCard/UserCard";
import Posts from "../../components/posts/Posts";

function Profile(props) {
    return (
        <div className={styles.profile}>
            <UserCard/>
            <Posts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, atque beatae deserunt dolor, eum harum laborum magnam possimus quasi quisquam quod vel vero voluptatum?</p>
        </div>


    );
}

export default Profile;