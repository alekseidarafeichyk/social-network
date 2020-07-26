import React from 'react';
import s from './Users.module.css'
import {UsersType} from '../redux/UsersReducer/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {RootState} from '../redux/redux-store';

type UsersPropsType = {
    userPage: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

 class Users extends React.Component<UsersPropsType, RootState>{
    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>{props.setUsers(response.data.items)});
    }

    render() {
        return (
        <div>
            {
                this.props.userPage.map(us => <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photos.small != null ? us.photos.small : userPhoto} alt=""
                                 className={s.photo}/>
                        </div>
                        <div>
                            {
                                us.followed ?
                                    <button onClick={() => {
                                        this.props.follow(us.id)
                                    }}>Followed</button> :
                                    <button onClick={() => {
                                        this.props.unFollow(us.id)
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
}

export default Users;