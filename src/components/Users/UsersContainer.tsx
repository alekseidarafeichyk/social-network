import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toogleIsFetching,
    unFollow,
    UsersType
} from '../redux/UsersReducer/users-reducer';
import axios from 'axios';
import Users from './Users';
import styles from './UsersContainer.module.css'
import {CircularProgress} from '@material-ui/core';


type UsersPropsType = {
    userPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toogleIsFetching: (value: boolean) => void
}

class UsersFCComponent extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (currentPage: number) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <CircularProgress disableShrink/> : null}


            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                userPage={this.props.userPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        userPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let UsersContainer = connect(mapStateToProps, {follow, unFollow,setUsers, setCurrentPage, setTotalCount, toogleIsFetching})(UsersFCComponent)

export default UsersContainer

