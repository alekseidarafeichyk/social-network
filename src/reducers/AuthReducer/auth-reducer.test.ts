import {authReducer, AuthStateType, setUserDataAC} from './auth-reducer';

let startState: AuthStateType
beforeEach(() => {
    startState = {
        id: 2,
        email: '@it-kamasutra.com',
        login: 'Dimych',
        isAuth: false
    }
})


test('all values must change', () => {
    let action = setUserDataAC(4, 'detox@gmail.com', 'Alesha',)

    let endState = authReducer(startState, action)

    expect(endState.id).toBe(4)
    expect(endState.email).toBe('detox@gmail.com')
    expect(endState.login).toBe('Alesha')
})
