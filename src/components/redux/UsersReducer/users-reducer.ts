import {v1} from 'uuid';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState: InitialStateType = {
    users: []
}

type InitialStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: FhotoUserType
    status: null
    followed: boolean
}

type FhotoUserType = {
    small: null | string
    large: null | string
}

type Location = {
    country: string
    city: string
}

export type UserActionType = FollowType | UnFollowType | SetUsersType;

type FollowType = {
    type: typeof FOLLOW
    userId: number
}

type UnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}


const usersReducer = (state = InitialState, action: UserActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {
                            ...us,
                            followed: !us.followed
                        }
                    } else {
                        return us
                    }

                })
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {
                            ...us,
                            followed: !us.followed
                        }
                    } else {
                        return us
                    }

                })
            }
        case 'SET_USERS':
            return {...state, users: [...action.users]}
        default :
            return {...state}
    }
};

export const followAc = (userId: number) => {
    return {
        type: FOLLOW as typeof FOLLOW,
        userId
    }
}
export const unFollowAc = (userId: number) => {
    return {
        type: UNFOLLOW as typeof UNFOLLOW,
        userId
    }
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS as typeof SET_USERS,
        users
    }
}

export default usersReducer