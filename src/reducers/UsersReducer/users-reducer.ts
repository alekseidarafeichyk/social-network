import {usersAPI} from '../../api/api';
import {Dispatch} from 'react';
import {updateObjectInArray} from '../../utils/validators/objects-helper';

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'user/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'user/TOGGLE_FOLLOWING_PROGRESS'

export let InitialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = InitialState, action: UserActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users : updateObjectInArray(state.users,action.userId,'id',{followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed: false})
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.value}
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state
    }
};


//actions
export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const toogleIsFetchingAC = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value} as const)
export const toogleFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


//thunks
export const requestUsers = (page: number, pageSize: number) => async (dispatch: DispatchType) => {

    dispatch(toogleIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))

    const response = await usersAPI.getUsers(page, pageSize)

    dispatch(toogleIsFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalCountAC(response.totalCount))
}


const followUnfollowFlow =  async (dispatch: DispatchType,userID: number,apiMethod: any, actionCreator : any ) => {
    dispatch(toogleFollowingProgressAC(true, userID))
    const response = await apiMethod(userID)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }

    dispatch(toogleFollowingProgressAC(false, userID))
}



export const unFollowUserThunk = (userID: number) => async (dispatch: DispatchType) => {
    await followUnfollowFlow(dispatch,userID,usersAPI.unFollowUser.bind(userID),unFollowAC)
}
export const followUserThunk = (userID: number) => async (dispatch: DispatchType) => {
    await followUnfollowFlow(dispatch,userID,usersAPI.followUser.bind(userID),followAC)
}

//types
type DispatchType = Dispatch<UserActionType>
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
export type UserActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toogleIsFetchingAC>
    | ReturnType<typeof toogleFollowingProgressAC>



