import {combineReducers, createStore} from 'redux'
import profileReducer, {ProfileActionType} from './profile-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import usersReducer, {UserActionType} from './UsersReducer/users-reducer';

export type ActionsType = ProfileActionType | DialogsActionType | UserActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store;
