import {appReducer, initializedSuccess, InitialStateType} from './appReducer';

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('the initialization key should become true', () => {

    let endState = appReducer(startState,initializedSuccess() )

    expect(endState.initialized).toBeTruthy()
})