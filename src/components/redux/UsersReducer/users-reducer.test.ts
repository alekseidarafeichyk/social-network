import {v1} from 'uuid';
import usersReducer, {followAc, unFollowAc, setUsers} from './users-reducer';


test('one of the users should change false to true', () => {
    let startState = {
        users: [
            {
                name: "zidane24",
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "Vitaliy_Kormylo",
                id: 2,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "vahe11",
                id: 3,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "AlexKhvorov",
                id: 4,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
        ]
    }

    let action = followAc(3)

    let endState = usersReducer(startState, action)

    expect(startState.users[2].followed).toBeFalsy()
    expect(endState.users[2].followed).toBeTruthy()
})

test('one of the users should change true to false', () => {
    let startState = {
        users: [
            {
                name: "zidane24",
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: true,
            },
            {
                name: "Vitaliy_Kormylo",
                id: 2,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "vahe11",
                id: 3,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "AlexKhvorov",
                id: 4,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
        ]
    }

    let action = unFollowAc(1)

    let endState = usersReducer(startState, action)

    expect(startState.users[0].followed).toBeTruthy()
    expect(endState.users[0].followed).toBeFalsy()
})

test('users should be added to the user array', () => {
    let startState = {
        users: [
            {
                name: "zidane24",
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
            {
                name: "Vitaliy_Kormylo",
                id: 2,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: null,
                followed: false,
            },
        ]
    }

    let newUsers = [
        {
            name: "zidane24",
            id: 1,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: false,
        },
        {
            name: "Vitaliy_Kormylo",
            id: 2,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: false,
        },
        {
            name: "vahe11",
            id: 3,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: false,
        },
        {
            name: "AlexKhvorov",
            id: 4,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null,
            },
            status: null,
            followed: false,
        },
    ]

    let action = setUsers(newUsers)

    let endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(4)
})