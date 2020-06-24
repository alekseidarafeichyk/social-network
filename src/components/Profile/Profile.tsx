import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../redux/state";

type ProfileType = {
    posts: Array<PostType> ,
    addPostCallBack : (postText:string) => void
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostCallBack={props.addPostCallBack}/>
        </div>
    );
}

export default Profile;