import {v1} from 'uuid';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState: InitialStateType = {
    users: [
        {
            id: v1(),
            fhotoUrl: 'https://www.litmir.me/data/Author/2000/2932/%D0%A4%D0%BE%D1%82%D0%BE_%D0%94%D0%B0%D1%80%D0%B2%D0%B8%D0%BD_%D0%A7%D0%B0%D1%80%D0%BB%D1%8C%D0%B7_57635.jpg',
            followed: true,
            fullName: 'Alex S.',
            status: 'Hello',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: v1(),
            fhotoUrl: 'https://www.litmir.me/data/Author/2000/2932/%D0%A4%D0%BE%D1%82%D0%BE_%D0%94%D0%B0%D1%80%D0%B2%D0%B8%D0%BD_%D0%A7%D0%B0%D1%80%D0%BB%D1%8C%D0%B7_57635.jpg',
            followed: false,
            fullName: 'Dmitry K.',
            status: 'Hi',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: v1(),
            fhotoUrl: 'https://www.litmir.me/data/Author/2000/2932/%D0%A4%D0%BE%D1%82%D0%BE_%D0%94%D0%B0%D1%80%D0%B2%D0%B8%D0%BD_%D0%A7%D0%B0%D1%80%D0%BB%D1%8C%D0%B7_57635.jpg',
            followed: true,
            fullName: 'Alexander L.',
            status: 'Ky',
            location: {country: 'Poland', city: 'Warszawa'}
        },
        {
            id: v1(),
            fhotoUrl: 'https://www.litmir.me/data/Author/2000/2932/%D0%A4%D0%BE%D1%82%D0%BE_%D0%94%D0%B0%D1%80%D0%B2%D0%B8%D0%BD_%D0%A7%D0%B0%D1%80%D0%BB%D1%8C%D0%B7_57635.jpg',
            followed: false,
            fullName: 'Anton M.',
            status: 'Hi-hi',
            location: {country: 'Russia', city: 'Moscow'}
        },
    ]
}

type InitialStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: string
    fhotoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: Location
}

type Location = {
    country: string
    city: string
}

export type UserActionType = FollowType | UnFollowType | SetUsersType;

type FollowType = {
    type: typeof FOLLOW
    userId: string
}

type UnFollowType = {
    type: typeof UNFOLLOW
    userId: string
}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}


const usersReducer = (state = InitialState, action: UserActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {
                            ...us,
                            followed: !us.followed
                        }
                    } else {
                        return us
                    }

                })
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(us => {
                    if (us.id === action.userId) {
                        return {
                            ...us,
                            followed: !us.followed
                        }
                    } else {
                        return us
                    }

                })
            }
        case 'SET_USERS':
            return {...state, users: [...action.users]}
        default :
            return {...state}
    }
};

export const followAc = (userId: string) => {
    return {
        type: FOLLOW as typeof FOLLOW,
        userId
    }
}
export const unFollowAc = (userId: string) => {
    return {
        type: UNFOLLOW as typeof UNFOLLOW,
        userId
    }
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS as typeof SET_USERS,
        users
    }
}

export default usersReducer