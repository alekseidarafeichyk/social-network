import React from 'react';
import {UsersType} from '../../reducers/UsersReducer/users-reducer';
import Paginator from '../common/Paginator';
import User from './User';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (currentPage: number) => void
    userPage: Array<UsersType>
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
    portionSize: number
}

function Users(props: UsersPropsType) {

    const users = props.userPage.map(user => <User key={user.id}
                                                   user={user}
                                                   followingInProgress={props.followingInProgress}
                                                   unFollowUser={props.unFollowUser}
                                                   followUser={props.followUser}/>
    )


    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize={props.portionSize}
            />
            {users}
        </div>
    );
}

export default Users;