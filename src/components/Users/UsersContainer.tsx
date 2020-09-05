import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toogleIsFetchingAC,
    unFollowAC,
    UsersType
} from '../../reducers/UsersReducer/users-reducer';
import Users from './Users';
import {CircularProgress} from '@material-ui/core';
import {usersAPI} from '../../api/api';


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
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            });
    }

    onPageChanged = (currentPage: number) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
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

let UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalCount: setTotalCountAC,
    toogleIsFetching: toogleIsFetchingAC
})(UsersFCComponent)

export default UsersContainer

