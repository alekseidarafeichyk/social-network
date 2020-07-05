import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, DialogsPageType, onMessageChangeActionCreator, addMessageActionCreator} from "../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType,
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsPropsType) {
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)
    let dialogsElement = props.dialogsPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = onMessageChangeActionCreator(text)
        props.dispatch(action)
    }

    const addMessage = () => {
        let text = props.dialogsPage.newMessageText
        let action = addMessageActionCreator(text)
        props.dispatch(action)
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