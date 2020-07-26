import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {followAc, setUsers, unFollowAc, UsersType} from '../redux/UsersReducer/users-reducer';
import Users from './Users';

let mapStateToProps = (state: RootState) => {
    return {
        userPage: state.usersPage.users
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
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default  UsersContainer

