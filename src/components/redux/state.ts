import {v1} from "uuid";

let rerenderEntireTree = (props : RootStateType) => {
}


export type MessageType = {
    message: string
}

export type DialogType = {
    id: string,
    name: string
}

export type PostType = {
    id: string,
    message: string,
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi', likeCounts: 25},
            {id: v1(), message: 'Hello', likeCounts: 20},
        ],
        newPostText: '',
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
        ],
        newMessageText: '',
    },
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)

}

export const addPostCallBack = (postText: string) => {
    let newPost: PostType = {
        id: v1(),
        message: postText,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''

    rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state)
}

export const addMessageCallBack = (messageText: string) => {
    let newMessage: MessageType = {
        message: messageText
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''

    rerenderEntireTree(state);
}

export const  subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state;




