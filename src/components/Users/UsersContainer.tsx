import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {
    followUserThunk,
    getUsers,
    setCurrentPageAC,
    unFollowUserThunk,
    UsersType
} from '../../reducers/UsersReducer/users-reducer';
import Users from './Users';
import {CircularProgress} from '@material-ui/core';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


type UsersPropsType = {
    userPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    setCurrentPage: (currentPage: number) => void
    getUsers : (currentPage: number, pageSize : number) => void
    unFollowUser : (userID : number) => void
    followUser : (userID : number) => void
}

class UsersContainer extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <CircularProgress
                disableShrink
                size={100}
            /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                userPage={this.props.userPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                unFollowUser={this.props.unFollowUser}
                followUser={this.props.followUser}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers : getUsers,
    unFollowUser : unFollowUserThunk,
    followUser : followUserThunk
}))(UsersContainer)


