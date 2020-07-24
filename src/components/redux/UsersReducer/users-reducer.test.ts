import {v1} from 'uuid';
import usersReducer, {followAc, unFollowAc, setUsers} from './users-reducer';


test('one of the users should change false to true', () => {
    let startState = {
        users: [
            {
                id: '1',fhotoUrl:'',
                followed: true,
                fullName: 'Alex S.',
                status: 'Hello',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',fhotoUrl:'',
                followed: false,
                fullName: 'Dmitry K.',
                status: 'Hi',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: '3',fhotoUrl:'',
                followed: false,
                fullName: 'Alexander L.',
                status: 'Ky',
                location: {country: 'Poland', city: 'Warszawa'}
            },
            {
                id: '4',fhotoUrl:'',
                followed: false,
                fullName: 'Anton M.',
                status: 'Hi-hi',
                location: {country: 'Russia', city: 'Moscow'}
            },
        ]
    }

    let action = followAc('3')

    let endState = usersReducer(startState, action)

    expect(startState.users[2].followed).toBeFalsy()
    expect(endState.users[2].followed).toBeTruthy()
})

test('one of the users should change true to false', () => {
    let startState = {
        users: [
            {
                id: '1',
                fhotoUrl:'',
                followed: true,
                fullName: 'Alex S.',
                status: 'Hello',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: '2',
                fhotoUrl:'',
                followed: false,
                fullName: 'Dmitry K.',
                status: 'Hi',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: '3',
                fhotoUrl:'',
                followed: false,
                fullName: 'Alexander L.',
                status: 'Ky',
                location: {country: 'Poland', city: 'Warszawa'}
            },
            {
                id: '4',
                fhotoUrl:'',
                followed: true,
                fullName: 'Anton M.',
                status: 'Hi-hi',
                location: {country: 'Russia', city: 'Moscow'}
            },
        ]
    }

    let action = unFollowAc('1')

    let endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBeFalsy()
    expect(startState.users[0].followed).toBeTruthy()
})

test('users should be added to the user array', () => {
    let startState = {
        users: [
            {id: '1',fhotoUrl:'', followed: true, fullName: 'Alex S.', status: 'Hello', location: {country: 'Belarus', city: 'Minsk'}},
            {id: '2',fhotoUrl:'', followed: false, fullName: 'Dmitry K.', status: 'Hi', location: {country: 'Ukraine', city: 'Kiev'}},
            {id: '3',fhotoUrl:'', followed: false, fullName: 'Alexander L.', status: 'Ky', location: {country: 'Poland', city: 'Warszawa'}},
            {id: '4',fhotoUrl:'', followed: true, fullName: 'Anton M.', status: 'Hi-hi', location: {country: 'Russia', city: 'Moscow'}},
        ]
    }

    let newUsers = [
        {id: '1',fhotoUrl:'', followed: true, fullName: 'Alex S.', status: 'Hello', location: {country: 'Belarus', city: 'Minsk'}},
        {id: '2',fhotoUrl:'', followed: false, fullName: 'Dmitry K.', status: 'Hi', location: {country: 'Ukraine', city: 'Kiev'}},
        {id: '3',fhotoUrl:'', followed: false, fullName: 'Alexander L.', status: 'Ky', location: {country: 'Poland', city: 'Warszawa'}},
        {id: '4',fhotoUrl:'', followed: true, fullName: 'Anton M.', status: 'Hi-hi', location: {country: 'Russia', city: 'Moscow'}},
        {id: '5',fhotoUrl:'', followed: false, fullName: 'Alexandra L.', status: 'Ky', location: {country: 'France', city: 'Paris'}},
        {id: '6',fhotoUrl:'', followed: true, fullName: 'Vadim K.', status: 'Hi-hi', location: {country: 'Belarus', city: 'Pinsk'}},
    ]

    let action = setUsers(newUsers)

    let endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(6)
})