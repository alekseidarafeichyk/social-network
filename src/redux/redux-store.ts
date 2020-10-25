import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers , composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store;

