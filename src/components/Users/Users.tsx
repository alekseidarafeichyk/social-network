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
}

function Users(props: UsersPropsType) {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            {
                props.userPage.map(us => <User key={us.id}
                                               user={us}
                                               followingInProgress={props.followingInProgress}
                                               unFollowUser={props.unFollowUser}
                                               followUser={props.followUser}/>
                )
            }
        </div>
    );
}

export default Users;