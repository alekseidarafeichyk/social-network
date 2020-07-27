import {v1} from 'uuid';
import usersReducer, {followAc, unFollowAc, setUsers, setCurrentPageAC, setTotalCountAC} from './users-reducer';


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
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 3
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
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 3
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
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 3
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



test('should change the page number', () => {
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
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 3
    }

    let action = setCurrentPageAC(4)

    let endState = usersReducer(startState, action)

    expect(startState.currentPage).toBe(3)
    expect(endState.currentPage).toBe(4)
})

test('should change the number of pages', () => {
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
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 3
    }

    let action = setTotalCountAC(4)

    let endState = usersReducer(startState, action)

    expect(startState.totalUsersCount).toBe(15)
    expect(endState.totalUsersCount).toBe(4)
})