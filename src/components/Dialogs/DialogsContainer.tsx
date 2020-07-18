import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';

let mapState = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatch = (dispatch: any) => {
    return {
        onChangeMessageText : (text : string) => {
            let action = onMessageChangeActionCreator(text)
            dispatch(action)
        },
        addMessage : (text: string) => {
            let action = addMessageActionCreator(text)
            dispatch(action)
        }
    }

}

let DialogsContainer = connect(mapState,mapDispatch)(Dialogs)

export default DialogsContainer;