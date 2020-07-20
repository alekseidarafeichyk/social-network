import {combineReducers, createStore} from 'redux'
import profileReducer, {AddPostActionType, UpdatePostActionType} from './profile-reducer';
import dialogsReducer, {AddMessageActionType, UpdateMessageActionType} from './dialogs-reducer';

export type ActionsType = UpdatePostActionType |
    AddPostActionType |
    UpdateMessageActionType |
    AddMessageActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store;
