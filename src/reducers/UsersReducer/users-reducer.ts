import {usersAPI} from '../../api/api';
import {Dispatch} from 'react';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

export let InitialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: []
}

export type UsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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


export const usersReducer = (state = InitialState, action: UserActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW :
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
        case UNFOLLOW :
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
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.value}
        case 'TOGGLE_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress : action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state
    }
};

export type UserActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toogleIsFetchingAC>
    | ReturnType<typeof toogleFollowingProgressAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const toogleIsFetchingAC = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value} as const)
export const toogleFollowingProgressAC = (isFetching: boolean , userId : number) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId} as const)

type DispatchType = Dispatch<UserActionType>

export const getUsers =  (currentPage: number, pageSize : number) => {
    return (dispatch : DispatchType) => {
   dispatch(toogleIsFetchingAC(true))
    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch (toogleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
        });
    }
}

export const unFollowUserThunk =  (userID : number) => {
    return (dispatch : DispatchType) => {
        toogleFollowingProgressAC(true, userID)
        usersAPI.unFollowUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    unFollowAC(userID)
                }
                toogleFollowingProgressAC(false, userID)
            })
    }
}

export const followUserThunk =  (userID : number) => {
    return (dispatch : DispatchType) => {
       dispatch(toogleFollowingProgressAC(true, userID))
        usersAPI.followUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    followAC(userID)
                }
                dispatch(toogleFollowingProgressAC(false, userID))
            })
    }
}


