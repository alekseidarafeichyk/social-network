import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropstType = {
    profile: any
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