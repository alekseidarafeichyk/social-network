const SET_USER_DATA = 'SET_USER_DATA'

export type InitialAuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let InitialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialAuthStateType = InitialState, action: AuthActionType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true,
            }
        }
        default :
            return state
    }
}

export const setUserData = (userId: number, email: string, login: string): SetUserDataACType => {
    return {
        type: SET_USER_DATA,
        userId,
        email,
        login,
    }
}

export type AuthActionType = SetUserDataACType

type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    userId: number
    email: string
    login: string
}