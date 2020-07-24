import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {RootState} from '../redux/redux-store';
import {followAc, setUsers, unFollowAc, UsersType} from '../redux/UsersReducer/users-reducer';

let mapStateToProps = (state: RootState) => {
    return {
        userPage: state.usersPage.users
    }
}

let mapDispatchToProps =(dispatch: any) => {
    return {
        follow: (userId: string) => {
            let action = followAc(userId)
            dispatch(action)
        },
        unFollow: (userId: string) => {
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

