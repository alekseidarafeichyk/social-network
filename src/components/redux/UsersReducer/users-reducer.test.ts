import {v1} from 'uuid';
import usersReducer, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    InitialStateType, toogleIsFetching
} from './users-reducer';


let startState : InitialStateType;

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})

test('one of the users should change false to true', () => {
    let action = follow(3)

    let endState = usersReducer(startState, action)

    expect(startState.users[2].followed).toBeFalsy()
    expect(endState.users[2].followed).toBeTruthy()
})

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})

test('one of the users should change true to false', () => {
    let action = unFollow(1)

    let endState = usersReducer(startState, action)

    expect(startState.users[0].followed).toBeTruthy()
    expect(endState.users[0].followed).toBeFalsy()
})

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})


test('users should be added to the user array', () => {

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

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})

test('should change the page number', () => {
    let action = setCurrentPage(4)

    let endState = usersReducer(startState, action)

    expect(startState.currentPage).toBe(3)
    expect(endState.currentPage).toBe(4)
})

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})

test('should change the number of pages', () => {
    let action = setTotalCount(4)

    let endState = usersReducer(startState, action)

    expect(startState.totalUsersCount).toBe(15)
    expect(endState.totalUsersCount).toBe(4)
})

beforeEach(() => {
    startState = {
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
        currentPage: 3,
        isFetching: false,
    }
})

test('should change isFetching', () => {
    let action = toogleIsFetching(true)

    let endState = usersReducer(startState, action)

    expect(startState.isFetching).toBe(false)
    expect(endState.isFetching).toBe(true)
})
