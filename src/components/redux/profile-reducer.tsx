import {PostType} from './store';
import {v1} from 'uuid'
import {ActionsType} from './redux-store';

const UPDATE_POST = 'Update-Post'
const ADD_POST = 'Add-Post'


export type UpdatePostActionType = {
    type: typeof UPDATE_POST
    newText: string
}

export type AddPostActionType = {
    type: typeof ADD_POST
    postText: string
}

export type InitialStateType = {
    posts: Array<PostType>,
    newPostText: string
}

const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi', likeCounts: 25},
        {id: v1(), message: 'Hello', likeCounts: 20},
    ],
    newPostText: ''
}

const profileReducer = (state
                            = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'Update-Post':
            return {...state, newPostText: action.newText}
        case 'Add-Post':
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
        default:
            return state;
    }
}

export const onPostChangeActionCreator = (letter: string) => ({
        type: UPDATE_POST as typeof UPDATE_POST,
        newText: letter
    }
)

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST as typeof ADD_POST,
        postText: text
    }
}

export default profileReducer;