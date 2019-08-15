import React from 'react';
import styles from './Textarea.module.scss';
import formStyles from "../Forms.module.scss";

/**
 *
 * @param props label, classes, name, placeholder, id, rows, value
 * @returns {*}
 * @constructor
 */
function Textarea(props) {
    let newPostElement = React.createRef();
    let addPost = ()=> {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div>
            { props.label && <label htmlFor={props.id}>{props.label}</label> }
            <textarea
                ref={newPostElement}
                className={`${formStyles.formControl} ${props.classes}`}
                name =          {props.name}
                placeholder =   {props.placeholder}
                id =            {props.id}
                rows =          {props.rows} >
                                {props.value}
            </textarea>
        </div>

    );
}

export default Textarea;