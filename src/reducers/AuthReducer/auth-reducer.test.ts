import {authReducer, InitialAuthStateType, setUserData} from './auth-reducer';

let startState: InitialAuthStateType
beforeEach(() => {
    startState = {
        id: 2,
        email: '@it-kamasutra.com',
        login: 'Dimych',
        isFetching: false
    }
})


test('all values must change', () => {
    let action = setUserData(4, 'detox@gmail.com', 'Alesha',)

    let endState = authReducer(startState, action)

    // expect(startState.id).toBe(2)
    expect(endState.id).toBe(4)
    // expect(startState.email).toBe('@it-kamasutra.com')
    expect(endState.email).toBe('detox@gmail.com')
    // expect(startState.login).toBe('Dimych')
    expect(endState.login).toBe('Alesha')
})
