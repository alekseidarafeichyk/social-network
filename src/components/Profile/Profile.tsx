import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootState} from "../redux/redux-store";

type ProfileType = {
    store: RootState
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;