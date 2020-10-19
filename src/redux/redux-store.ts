import {combineReducers, createStore, applyMiddleware} from 'redux'
import {ProfileActionType, profileReducer} from '../reducers/ProfileReducer/profile-reducer';
import {DialogsActionType, dialogsReducer} from '../reducers/DialogsReducer/dialogs-reducer';
import {UserActionType, usersReducer} from '../reducers/UsersReducer/users-reducer';
import {AuthActionType, authReducer} from '../reducers/AuthReducer/auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from '../reducers/AuthReducer/appReducer';


export type ActionsType = ProfileActionType | DialogsActionType | UserActionType | AuthActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth : authReducer,
    form: formReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers ,applyMiddleware(thunkMiddleWare))

export default store;

// @ts-ignore
window.store = store;
