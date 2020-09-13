import {combineReducers, createStore, applyMiddleware} from 'redux'
import {ProfileActionType, profileReducer} from '../reducers/profile-reducer';
import {DialogsActionType, dialogsReducer} from '../reducers/dialogs-reducer';
import {UserActionType, usersReducer} from '../reducers/UsersReducer/users-reducer';
import {AuthActionType, authReducer} from '../reducers/AuthReducer/auth-reducer';
import thunkMiddleWare from 'redux-thunk';


export type ActionsType = ProfileActionType | DialogsActionType | UserActionType | AuthActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth : authReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers ,applyMiddleware(thunkMiddleWare))

export default store;

// @ts-ignore
window.store = store;
