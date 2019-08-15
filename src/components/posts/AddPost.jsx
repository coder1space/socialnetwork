import React from 'react';
import styles from './Posts.module.scss';
import formStyles from '../forms/Forms.module.scss';
import FormGroup from "../forms/FormGroup";
import buttonStyles from "../forms/button/Button.module.scss";

function AddPost(props) {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
    newPostElement.current.value = props.newPostText;
  }

  return (
     <div className={styles.addPost}>
       <FormGroup>
         <div>
           <label htmlFor="addPost">Add Post</label>
           <textarea
              onChange    = {onPostChange}
              ref         = {newPostElement}
              className   = {formStyles.formControl}
              name        = "addPost"
              placeholder = "Type your text here"
              id          = "addPost"
              rows        = "3"
              value       = {props.value}
           />
         </div>
       </FormGroup>
       <div className={formStyles.textRight}>
         <button
            onClick={ addPost } className={`${buttonStyles.btn} ${buttonStyles.btnLight}`}>Send</button>
       </div>
     </div>
  );
}

export default AddPost;