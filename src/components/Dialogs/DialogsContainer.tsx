import React from 'react';
import {addMessageAC} from '../../reducers/dialogs-reducer';
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
        addMessage : (text: string) => {
            dispatch(addMessageAC(text))
        }
    }

}

export default compose<React.ComponentType>(
    connect(mapState,mapDispatch),
    WithAuthRedirect
)(Dialogs)