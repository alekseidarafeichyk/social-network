import React from 'react';
import s from './Users.module.css'
import {UsersType} from '../redux/UsersReducer/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

type UsersPropsType = {
    userPage: Array<UsersType>
    follow: (userId:number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

function Users(props: UsersPropsType) {


    if (props.userPage.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>
                props.setUsers(response.data.items)
            )
    }

    return (
        <div>

            {
                props.userPage.map(us => <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photos.small != null ? us.photos.small : userPhoto } alt="" className={s.photo}/>
                        </div>
                        <div>
                            {
                                us.followed ?
                                    <button onClick={()=> {props.follow(us.id)} }>Followed</button> :
                                    <button onClick={()=> {props.unFollow(us.id)} }>Unfollowed</button>
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