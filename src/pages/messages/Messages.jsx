import React from 'react';
import styles from './Messages.module.scss';
import Dialog from "./dialog/Dialog";
import FormGroup from "../../components/forms/FormGroup";
import formStyles from "../../components/forms/Forms.module.scss";
import buttonStyles from "../../components/forms/button/Button.module.scss";

function Messages(props) {
    let dialogs = props.messagesPage.dialogs.map( d => <Dialog ID={d.dialog.ID} contact={d.dialog.contact} messages={d.dialog.messages}/> )
    let sendMessageInput = React.createRef()
    let sendMessage = ()=> {
        let text = sendMessageInput.current.value
        alert(text)
    }
    return (
        <div className={styles.messages}>
            {dialogs}
            <div className={styles.sendMessage}>
                <FormGroup>
                    <div>
                        <label htmlFor="addPost">Add Post</label>
                        <input
                            ref={sendMessageInput}
                            className={formStyles.formControl}
                            name =          "sendMessage"
                            placeholder =   "Type your message here"
                            id =            "sendMessage"
                        />
                    </div>
                </FormGroup>
                <div className={formStyles.textRight}>
                    <button onClick={ sendMessage } className={`${buttonStyles.btn} ${buttonStyles.btnLight}`}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;