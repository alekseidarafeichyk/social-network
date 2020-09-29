import {authAPI} from '../../api/api';
import {Dispatch} from 'react';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let InitialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type AuthActionType = SetUserDataACType

export const authReducer = (state: AuthStateType = InitialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
            }
        }
        default :
            return state
    }
}

type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType => {
    return {
        type: SET_USER_DATA ,
        userId,
        email,
        login,
        isAuth
    }
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserDataAC(id, login, email, true))
                }
            });
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages : 'Some error'
                dispatch(stopSubmit('login',{_error : `${message}`}))
            }
        })
}


export const logoutTC = () => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
}



