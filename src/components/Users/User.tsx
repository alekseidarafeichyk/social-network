import React from 'react';
import userPhoto from '../../assets/images/user.png';
import {UsersType} from '../../reducers/UsersReducer/users-reducer';
import {NavLink} from 'react-router-dom';
import style from './User.module.css'

type UsersPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unFollowUser: (userID: number) => void
    followUser: (userID: number) => void
}

function User(props: UsersPropsType) {
    return (
        <div>
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
                    <div>{'us.location.country'}</div>
                    <div>{'us.location.city'}</div>
                </div>
                <div className={style.btnWrap}>
                    {props.user.followed ?
                        <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                className={style.btnMode} onClick={() => {
                            props.unFollowUser(props.user.id)
                        }}>Unfollowed</button> :
                        <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                className={style.btnMode} onClick={() => {
                            props.followUser(props.user.id)
                        }}>Followed</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;