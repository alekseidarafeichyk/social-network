import {v1} from "uuid";
// import profileReducer, {UpdatePostActionType, AddPostActionType} from "./profile-reducer";
// import dialogsReducer, { UpdateMessageActionType, AddMessageActionType } from "./dialogs-reducer";
//
// export type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//     _callSubscriber: (props: StoreType) => void
//     subscribe: (observer: (props: StoreType) => void) => void
//     dispatch: (action: ActionsType) => void
// }
//
// export type ActionsType = UpdatePostActionType | AddPostActionType | UpdateMessageActionType | AddMessageActionType
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi', likeCounts: 25},
//                 {id: v1(), message: 'Hello', likeCounts: 20},
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Alex'},
//                 {id: v1(), name: 'Dima'},
//                 {id: v1(), name: 'Azamat'},
//                 {id: v1(), name: 'Sergey'},
//                 {id: v1(), name: 'Alexander'},
//             ],
//             messages: [
//                 {message: 'Hello'},
//                 {message: 'h1'},
//                 {message: 'How yo`re doing?'},
//                 {message: 'bye'},
//             ],
//             newMessageText: '',
//         },
//     },
//     getState() {
//         return this._state
//     },
//
//     _callSubscriber() {
//     },
//     subscribe(observer: (props: StoreType) => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage,action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
//
//         this._callSubscriber(this)
//     },
// }

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

// export default store;





