import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from 'react-router';

type DialogsPropsType = {
    dialogsPage: DialogsPageType,
    isAuth : boolean
    onChangeMessageText: (text: string) => void
    addMessage: (text: string) => void
}

function Dialogs(props: DialogsPropsType) {
    let messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id}  message={message.message}/>)
    let dialogsElement = props.dialogsPage.dialogs.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onChangeMessageText(text)
    }

    const addMessage = () => {
        let text = props.dialogsPage.newMessageText
        props.addMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <textarea
                    onChange={onChangeMessageText}
                    value={props.dialogsPage.newMessageText}
                />
                <button onClick={addMessage}>add message</button>
            </div>
        </div>

    );
}

export default Dialogs;