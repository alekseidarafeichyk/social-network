import {v1} from "uuid";


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (props: StoreType) => void
    subscribe: (observer: (props: StoreType) => void) => void
    dispatch: (action: ActionsType) => void
}


export type ActionsType = UpdatePostActionType | AddPostActionType |UpdateMessageActionType | AddMessageActionType

type UpdatePostActionType = {
    type: 'Update-Post'
    newText: string
}

type AddPostActionType = {
    type: 'Add-Post'
    postText: string
}

type UpdateMessageActionType = {
    type: 'Update-Message'
    newMessage: string
}

type AddMessageActionType = {
    type: 'Add-Message'
    messageText: string
}

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
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observer: (props: StoreType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        if (action.type === 'Update-Post') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this)
        } else if (action.type === 'Add-Post') {
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likeCounts: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this)
        } else if (action.type === 'Update-Message') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this)
        } else if (action.type === 'Add-Message') {
            let newMessage: MessageType = {
                message: action.messageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this);
        }
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


export default store;





