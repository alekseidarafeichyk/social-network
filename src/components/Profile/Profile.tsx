import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from '../../reducers/profile-reducer';

type ProfilePropstType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
}

function Profile(props: ProfilePropstType) {
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