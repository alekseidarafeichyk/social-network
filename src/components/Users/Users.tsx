import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {UsersType} from '../redux/UsersReducer/users-reducer';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    userPage: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

function Users(props : UsersPropsType) {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];

    for (let i = 1; i <= countPage; i++) {
        page.push(i)
    }

    return (
        <div>
            <div>
                {page.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : ''}
                        key={p}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>
                            {`${p} `}
                        </span>
                })}
            </div>
            {
                props.userPage.map(us => <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photos.small != null ? us.photos.small : userPhoto} alt=""
                                 className={s.photo}/>
                        </div>
                        <div>
                            {
                                us.followed ?
                                    <button onClick={() => {
                                        props.follow(us.id)
                                    }}>Followed</button> :
                                    <button onClick={() => {
                                        props.unFollow(us.id)
                                    }}>Unfollowed</button>
                            }
                        </div>
                    </span>
                        <span>
                        <div>{us.name}</div>
                        <div>{us.status}</div>
                    </span>
                        <span>
                        <div>{'us.location.country'}</div>
                        <div>{'us.location.city'}</div>
                    </span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;