import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfileType = {
    posts: ProfilePageType ,
    addPostCallBack : (postText:string) => void,
    updateNewPostText: (newText: string) => void,
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPostCallBack={props.addPostCallBack}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;