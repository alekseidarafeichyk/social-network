import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from '../redux/profile-reducer';

type ProfilePropstType = {
    profile: ProfileType | null
}

function Profile(props: ProfilePropstType) {
    debugger
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;