import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../reducers/ProfileReducer/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         changeUserStatus={props.changeUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;