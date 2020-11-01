import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../reducers/ProfileReducer/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         changeUserStatus={props.changeUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;