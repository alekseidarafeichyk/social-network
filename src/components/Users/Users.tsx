import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {UsersType} from '../../reducers/UsersReducer/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    userPage: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

function Users(props: UsersPropsType) {
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
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        key={p}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>
                            {`${p} `}
                        </span>
                })}
            </div>
            {
                props.userPage.map(us => <div key={us.id} className={styles.userContainer}>

                        <div className={styles.photo}>
                            <NavLink to={'/profile/' + us.id}>
                                <img src={us.photos.small != null ? us.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div className={styles.userDescription}>
                            <h5>
                                {us.name}
                            </h5>
                            <p>{us.status}</p>
                            <div>{'us.location.country'}</div>
                            <div>{'us.location.city'}</div>
                        </div>
                        <div className={styles.btnWrap}>
                            {us.followed ?
                                    <button className={styles.btnMode} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`, {
                                            withCredentials: true,
                                            headers : {
                                                'API-KEY' : '628f1297-6b8a-455c-a591-d2e75c4bd3a6'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(us.id)
                                                }
                                            })
                                       }}>Unfollowed</button> :
                                <button className={styles.btnMode} onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`, {},{
                                        withCredentials: true,
                                        headers : {
                                            'API-KEY' : '628f1297-6b8a-455c-a591-d2e75c4bd3a6'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(us.id)
                                            }
                                        })
                                }}>Followed</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;