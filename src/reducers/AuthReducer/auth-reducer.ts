import {authAPI} from '../../api/api';
import {Dispatch} from 'react';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA'

let InitialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = InitialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth,
            }
        default :
            return state
    }
}

//actions
export const setUserDataAC = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, userId, email, login, isAuth} as const)

//thunks
export const getAuthUserDataTC = () => async (dispatch: Dispatch<AuthActionType>) => {
      const response = await authAPI.me()
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserDataAC(id, login, email, true))
                }
    }

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
  const response =  await authAPI.login(email, password, rememberMe)
                if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages : 'Some error'
                dispatch(stopSubmit('login', {_error: `${message}`}))
            }

}
export const logoutTC = () => async (dispatch: Dispatch<AuthActionType>) => {
  const response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
}

//types
export type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setUserDataAC>

