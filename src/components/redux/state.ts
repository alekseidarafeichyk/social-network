import {v1} from "uuid";


const ADD_POST = 'Add-Post'
const UPDATE_POST = 'Update-Post'
const UPDATE_MESSAGE = 'Update-Message'
const ADD_MESSAGE ='Add-Message'

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (props: StoreType) => void
    subscribe: (observer: (props: StoreType) => void) => void
    dispatch: (action: ActionsType) => void
}


export type ActionsType = UpdatePostActionType | AddPostActionType | UpdateMessageActionType | AddMessageActionType

type UpdatePostActionType = {
    type: typeof UPDATE_POST
    newText: string
}

type AddPostActionType = {
    type: typeof ADD_POST
    postText: string
}

type UpdateMessageActionType = {
    type: typeof UPDATE_MESSAGE
    newMessage: string
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
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

        if (action.type ===  UPDATE_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this)
        } else if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likeCounts: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this)
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {
                message: action.messageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this);
        }
    },
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

export const onMessageChangeActionCreator = (text: string) => (
    {
        type: UPDATE_MESSAGE as typeof UPDATE_MESSAGE,
        newMessage: text
    }
)

export const addMessageActionCreator = (text: string) => {
    return (
        {
            type: ADD_MESSAGE as typeof ADD_MESSAGE,
            messageText: text
        }
    )
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





