import {DialogType, MessageType} from '../redux/store';
import {v1} from 'uuid';

const UPDATE_MESSAGE = 'Update-Message'
const ADD_MESSAGE = 'Add-Message'

type DialogsStateType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}

let initialState: DialogsStateType = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Azamat'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Alexander'},
    ],
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'h1'},
        {id: v1(), message: 'How yo`re doing?'},
        {id: v1(), message: 'bye'},
    ],
    newMessageText: '',
}

export type  DialogsActionType =
    | ReturnType<typeof onMessageChangeAC>
    | ReturnType<typeof addMessageAC>


export const dialogsReducer = (state = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case UPDATE_MESSAGE :
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case ADD_MESSAGE :
            let newMessage: MessageType = {
                id: v1(),
                message: action.messageText
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage,
                ],
                newMessageText: ''
            }
        default:
            return state

    }
}

export const onMessageChangeAC = (text: string) => ({type: UPDATE_MESSAGE, newMessage: text} as const)
export const addMessageAC = (text: string) => ({type: ADD_MESSAGE, messageText: text} as const)

