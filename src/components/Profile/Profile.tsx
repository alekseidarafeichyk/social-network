import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../reducers/ProfileReducer/profile-reducer';
import style from './Profile.module.css'

function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profileContainer}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         changeUserStatus={props.changeUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfileData={props.saveProfileData}
        />
            <MyPostsContainer isOwner={props.isOwner}/>
        </div>
    );
}

export default Profile;

//types
type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfileData: (profile:any) => any
}
