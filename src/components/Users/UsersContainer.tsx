import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {
    followUserThunk,
    requestUsers,
    setCurrentPageAC,
    unFollowUserThunk,
    UsersType
} from '../../reducers/UsersReducer/users-reducer';
import Users from './Users';
import {CircularProgress} from '@material-ui/core';
import {compose} from 'redux';
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserPage
} from '../../reducers/UsersReducer/users-selectors';


type UsersPropsType = {
    userPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, RootState> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
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
        userPage: getUserPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        getUsers: requestUsers,
        unFollowUser: unFollowUserThunk,
        followUser: followUserThunk
    }))(UsersContainer)


