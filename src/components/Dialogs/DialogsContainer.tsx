import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";

function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogsPageState = store.getState().dialogsPage

                    const onChangeMessageText = (text: string) => {
                        let action = onMessageChangeActionCreator(text)
                        store.dispatch(action)
                    }

                    const addMessage = (text: string) => {
                        let action = addMessageActionCreator(text)
                        store.dispatch(action)
                    }

                    return <Dialogs dialogsPage={dialogsPageState}
                                    onChangeMessageText={onChangeMessageText}
                                    addMessage={addMessage}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;