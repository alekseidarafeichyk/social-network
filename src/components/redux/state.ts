import {v1} from "uuid";

let store: StoreType = {
    _state: {
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
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this)
    },
    addPostCallBack(postText: string) {
        let newPost: PostType = {
            id: v1(),
            message: postText,
            likeCounts: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''

        this._callSubscriber(this)
    },
    updateNewMessageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this)
    },
    addMessageCallBack(messageText: string) {
        let newMessage: MessageType = {
            message: messageText
        }

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = ''

        this._callSubscriber(this);
    },
    subscribe(observer: (props: StoreType) => void) {
        this._callSubscriber = observer
    },

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

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (props: StoreType) => void
    updateNewPostText: (newText: string) => void
    addPostCallBack: (postText: string) => void
    updateNewMessageText: (newMessage: string) => void
    addMessageCallBack: (messageText: string) => void
    subscribe: (observer: (props: StoreType) => void) => void
}

export default store;





