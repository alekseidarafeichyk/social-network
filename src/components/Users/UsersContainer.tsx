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
import axios from 'axios';
import Users from './Users';


type UsersPropsType = {
    userPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrent: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

class UsersFCComponent extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrent(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return  <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            userPage={this.props.userPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}

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

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersFCComponent)

export default  UsersContainer

