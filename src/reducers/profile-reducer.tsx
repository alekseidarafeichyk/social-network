import {PostType} from '../redux/store';
import {v1} from 'uuid'
import {Dispatch} from 'react';
import {profileAPI, usersAPI} from '../api/api';

const UPDATE_POST = 'UPDATE_POST'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const CHANGE_STATUS = 'CHANGE_STATUS'

type ProfileStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: Array<ContactsType>
    lookingForAJob: true,
    lookingForAJobDescription: string
    fullName: string
    userId: 2,
    photos: Array<PhotosType>
}

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type PhotosType = {
    small: string
    large: string
}

const initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: 'Hi', likeCounts: 25},
        {id: v1(), message: 'Hello', likeCounts: 20},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export type ProfileActionType =
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof changeStatusAC>

export const profileReducer = (state
                                   = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case CHANGE_STATUS:
            debugger
            return {
                ...state,
                status: action.newStatus
            }
        default:
            return state;
    }
}

export const onPostChangeAC = (letter: string) => ({type: UPDATE_POST, newText: letter} as const)
export const addPostAC = (text: string) => ({type: ADD_POST, postText: text} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const changeStatusAC = (newStatus: string) => ({type: CHANGE_STATUS, newStatus} as const)


type DispatchUserProfile = Dispatch<ProfileActionType>

export const getUserProfile = (userId: string) => {
    return (dispatch: DispatchUserProfile) => {

        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}


export const getUserStatus = (userId: string) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatusAC(data))

        })

}

export const changeUserStatus = (newStatus: string) => (dispatch: Dispatch<ProfileActionType>) => {

    profileAPI.changeStatus(newStatus)
        .then(data => {

            if (data.resultCode === 0) {
                dispatch(changeStatusAC(newStatus))
            }

        })
}

