import {v1} from 'uuid'
import {Dispatch} from 'react';
import {profileAPI, usersAPI} from '../../api/api';

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const CHANGE_STATUS = 'profile/CHANGE_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

//Разобраться с newPostText в инитиал стейте

const initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: 'Hi', likeCounts: 25},
        {id: v1(), message: 'Hello', likeCounts: 20},
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            large: '',
            small: ''
        }
    } ,
    status: '',
}

export const profileReducer = (state
                                   = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
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
            return {
                ...state,
                status: action.newStatus
            }
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {

                ...state,
                profile : {...state.profile,photos: action.photo}
            }
        default:
            return state;
    }
}

//actions
export const addPostAC = (text: string) => ({type: ADD_POST, postText: text} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const changeStatusAC = (newStatus: string) => ({type: CHANGE_STATUS, newStatus} as const)
export const savePhotoSuccessAC = (photo: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photo} as const)

//thunks
export const getUserProfile = (userId: string) => {
    return (dispatch: DispatchUserProfile) => {

        usersAPI.getUserProfile(userId)
            .then(data => {

                dispatch(setUserProfileAC(data))
            })
    }
}
export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    const resolve = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(resolve))
}

export const changeUserStatus = (newStatus: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.changeStatus(newStatus)
    if (response.resultCode === 0) {
        dispatch(changeStatusAC(newStatus))
    }
}

export const ChangeMyPhoto = (photo: File) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.ChangeMyPhoto(photo)

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.photos))
    }
}

//types

export type ProfileStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType
    status: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType | null
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number,
    photos: PhotosType
}
export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
type DispatchUserProfile = Dispatch<ProfileActionType>
export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof changeStatusAC>
    | ReturnType<typeof savePhotoSuccessAC>
export type PostType = {
    id: string,
    message: string,
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}


