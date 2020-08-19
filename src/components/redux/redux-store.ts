import {combineReducers, createStore} from 'redux'
import profileReducer, {ProfileActionType} from './profile-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import usersReducer, {UserActionType} from './UsersReducer/users-reducer';
import {AuthActionType, authReducer} from './AuthReducer/auth-reducer';

export type ActionsType = ProfileActionType | DialogsActionType | UserActionType | AuthActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth : authReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store;

// @ts-ignore
window.store = store;
