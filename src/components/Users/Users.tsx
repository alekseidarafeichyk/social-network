import React from 'react';
import s from './Users.module.css'
import {UsersType} from '../redux/UsersReducer/users-reducer';

type UsersPropsType = {
    userPage: Array<UsersType>
    follow: (userId:string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

function Users(props: UsersPropsType) {
    return (
        <div>
            {
                props.userPage.map(us => <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.fhotoUrl} alt="" className={s.photo}/>
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
                        <div>{us.fullName}</div>
                        <div>{us.status}</div>
                    </span>
                    <span>
                        <div>{us.location.country}</div>
                        <div>{us.location.city}</div>
                    </span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;