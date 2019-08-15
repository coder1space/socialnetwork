import React from 'react';
import styles from './Posts.module.scss';
import Post from "./Post";
import AddPost from "./AddPost";
import FormGroup from "../forms/FormGroup";

function Posts(props) {
    let posts = props.posts.map( post => <Post ID={post.ID} text={post.text} likes={post.likes}/> )
    return (
        <div className={styles.posts}>
            <AddPost
                label           = "Add new Post"
                addPost         = {props.addPost}
                value           = {props.newPostText}
                updatePostText  = {props.updatePostText}
            />
            <h3>Recent Posts</h3>
            {posts}
        </div>
    );
}

export default Posts;