const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export let InitialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: FhotoUserType
    status: null
    followed: boolean
}

type FhotoUserType = {
    small: null | string
    large: null | string
}

type Location = {
    country: string
    city: string
}

export type UserActionType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetTotalCountType | ToggleIsFetchingType;

type FollowType = {
    type: typeof FOLLOW
    userId: number
}

type UnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    value: boolean
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
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching : action.value}
        default :
            return {...state}
    }
};

export const follow = (userId: number) => {
    return {
        type: FOLLOW as typeof FOLLOW,
        userId
    }
}
export const unFollow = (userId: number) => {
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


export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE as typeof SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT as typeof SET_TOTAL_COUNT,
        totalCount
    }
}

export const toogleIsFetching = (value: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING as typeof TOGGLE_IS_FETCHING,
        value
    }
}

export default usersReducer