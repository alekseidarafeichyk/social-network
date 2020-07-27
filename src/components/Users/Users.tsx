import React from 'react';
import s from './Users.module.css'
import {UsersType} from '../redux/UsersReducer/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {RootState} from '../redux/redux-store';

type UsersPropsType = {
    userPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrent: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType, RootState> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrent(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let countPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let page = [];

        for (let i = 1; i <= countPage; i++) {
            page.push(i)
        }

        return (
            <div>
                <div>
                    {page.map(p => {
                        return <span
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            key={p}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}>
                            {`${p} `}
                        </span>
                    })}
                </div>
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
        )
            ;
    }
}

export default Users;