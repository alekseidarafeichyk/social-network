import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: any
}

function DialogsContainer(props: DialogsContainerPropsType) {

    let state = props.store.getState()

    const onChangeMessageText = (text: string) => {
        let action = onMessageChangeActionCreator(text)
        props.store.dispatch(action)
    }

    const addMessage = (text: string) => {
        let action = addMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            dialogsPage={state.dialogsPage}
            onChangeMessageText={onChangeMessageText}
            addMessage={addMessage}
        />
    );
}

export default DialogsContainer;