import { DialogsPageType, DialogType, MessageType} from "./store";
import {v1} from "uuid";
import {ActionsType} from "./redux-store";

const UPDATE_MESSAGE = 'Update-Message'
const ADD_MESSAGE = 'Add-Message'


export type UpdateMessageActionType = {
    type: typeof UPDATE_MESSAGE
    newMessage: string
}

export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    messageText: string
}

export type InitialState = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}

let initialState : InitialState = {
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
}
const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "Update-Message":
            state.newMessageText = action.newMessage;
            return state;
        case "Add-Message":
            let newMessage: MessageType = {
                message: action.messageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state

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

export default dialogsReducer;