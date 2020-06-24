import {v1} from "uuid";
import rerenderEntireTree from "../../rerender";

export type MessageType = {
    message: string
}

export type DialogType = {
    id: string,
    name: string
}

export type PostType = {
    id : string ,
    message: string,
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi', likeCounts: 25},
            {id: v1(), message: 'Hello', likeCounts: 20},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Azamat'},
            {id: v1(), name: 'Sergey'},
            {id: v1(), name: 'Alexander'},
        ],
        messages: [
            {message: 'Hello'},
            {message: 'h1'},
            {message: 'How yo`re doing?'},
            {message: 'bye'},
        ]
    },
}

export const addPostCallBack = (postText: string) => {
    let newPost : PostType =  {
        id: v1(),
        message: postText,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const addMessageCallBack = (messageText : string) => {
    let newMessage : MessageType = {
        message : messageText
    }

    state.dialogsPage.messages.push(newMessage)

    rerenderEntireTree(state);
}


export default state;




