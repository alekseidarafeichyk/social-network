import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {UsersType} from '../../reducers/UsersReducer/users-reducer';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress : Array<number>
    onPageChanged: (currentPage: number) => void
    userPage: Array<UsersType>
    unFollowUser : (userID : number) => void
    followUser : (userID : number) => void
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
                                <button disabled={props.followingInProgress.some(id => id === us.id) } className={styles.btnMode} onClick={() => {props.unFollowUser(us.id)}}>Unfollowed</button> :
                                <button disabled={props.followingInProgress.some(id => id === us.id) } className={styles.btnMode} onClick={() => {props.followUser(us.id)}}>Followed</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;