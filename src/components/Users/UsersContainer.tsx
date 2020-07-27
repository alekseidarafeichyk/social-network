import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {
    followAc,
    setCurrentPageAC,
    setTotalCountAC,
    setUsers,
    unFollowAc,
    UsersType
} from '../redux/UsersReducer/users-reducer';
import Users from './Users';

let mapStateToProps = (state: RootState) => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps =(dispatch: any) => {
    return {
        follow: (userId: number) => {
            let action = followAc(userId)
            dispatch(action)
        },
        unFollow: (userId: number) => {
            let action = unFollowAc(userId)
            dispatch(action)
        },
        setUsers: (users: Array<UsersType>) => {
            let action = setUsers(users)
            dispatch(action)
        },
        setCurrent: (currentPage: number) => {
            let action = setCurrentPageAC(currentPage)
            dispatch(action)
        },
        setTotalCount : (totalCount: number) => {
            let action = setTotalCountAC(totalCount);
            dispatch(action)
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default  UsersContainer

