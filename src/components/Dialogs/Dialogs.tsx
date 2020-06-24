import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    addMessageCallBack: (messageText : string) => void
}

function Dialogs(props: DialogsPropsType) {
    let messagesElements = props.messages.map(message => <Message message={message.message}/>)
    let dialogsElement = props.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessage.current) {
            props.addMessageCallBack(newMessage.current.value);
            newMessage.current.value='';
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>

    );
}

export default Dialogs;