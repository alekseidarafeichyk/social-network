import React from 'react';
import {addMessageAC, onMessageChangeAC} from '../../reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

let mapState = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatch = (dispatch: any) => {
    return {
        onChangeMessageText : (text : string) => {
            let action = onMessageChangeAC(text)
            dispatch(action)
        },
        addMessage : (text: string) => {
            let action = addMessageAC(text)
            dispatch(action)
        }
    }

}

export default compose<React.ComponentType>(
    connect(mapState,mapDispatch),
    WithAuthRedirect
)(Dialogs)