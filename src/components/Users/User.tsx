import React from 'react';
import userPhoto from '../../assets/images/user.png';
import {UsersType} from '../../reducers/UsersReducer/users-reducer';
import {NavLink} from 'react-router-dom';
import style from './User.module.css'
import {Button} from '../common/Button/Button';

type UsersPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

function User(props: UsersPropsType) {

    const button = props.user.followed ?
        <Button name={'Unfollowed'}
                disabled={props.followingInProgress.some(id => id === props.user.id)}
                onClick={() => {
                    props.unFollowUser(props.user.id)
                }}/>
        :
        <Button name={'Followed'}
                disabled={props.followingInProgress.some(id => id === props.user.id)}
                onClick={() => {
                    props.followUser(props.user.id)
                }}/>

    return (
            <div className={style.userContainer}>
                <div className={style.photo}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div className={style.userDescription}>
                    <h5>
                        {props.user.name}
                    </h5>
                    <p>{props.user.status}</p>
                </div>
                <div className={style.btnWrap}>
                    {button}
                </div>
            </div>
    );
}

export default User;