import {ActionsType, DialogsPageType, MessageType} from "./state";

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

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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