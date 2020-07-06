import {ActionsType, PostType, ProfilePageType} from "./state";
import {v1} from "uuid"

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

const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch(action.type) {
        case "Update-Post":
            state.newPostText = action.newText;
            return state;
        case "Add-Post":
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likeCounts: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state;
        default: return state;
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