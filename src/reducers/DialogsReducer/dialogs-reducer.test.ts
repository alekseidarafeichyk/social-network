import {addMessageAC, dialogsReducer, DialogsStateType} from './dialogs-reducer';
import {v1} from 'uuid';


let startState: DialogsStateType;

beforeEach(() => {
    startState = {
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
})

test('a message should be added', () => {

    let endState = dialogsReducer(startState, addMessageAC('added message'))

    expect(endState.messages[4].message).toBe('added message')
    expect(endState.messages[4].id).toBeDefined()
})