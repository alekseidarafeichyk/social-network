import {PostType} from '../redux/store';
import {v1} from 'uuid'

const UPDATE_POST = 'UPDATE_POST'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


type ProfileStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: null | ProfileType
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
    profile: null
}

export type ProfileActionType =
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>

export const profileReducer = (state
                            = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case UPDATE_POST:
            return {...state, newPostText: action.newText}
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
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const onPostChangeAC = (letter: string) => ({type: UPDATE_POST, newText: letter} as const)
export const addPostAC = (text: string) => ({type: ADD_POST, postText: text} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
