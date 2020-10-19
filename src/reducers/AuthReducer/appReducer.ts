import { Dispatch } from "redux"
import {getAuthUserDataTC} from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCSESS'


let InitialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = InitialState, action: ActionTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default :
            return state
    }
}

//actions
export const initializedSuccess = () =>
    ({type: INITIALIZED_SUCCESS} as const)

//thunks
export const initializedAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

//types
type ActionTypes = ReturnType<typeof initializedSuccess>
export type InitialStateType = { initialized: boolean }

