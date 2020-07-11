import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    store: any
}

function MyPostsContainer(props: MyPostsContainerType) {
    let posts = props.store.getState()

    const onPostChange = (letter: string) => {
        let action = onPostChangeActionCreator(letter)
        props.store.dispatch(action)
    }

    const addPost = (text: string) => {
        let action = addPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            posts={posts.profilePage}
            onPostChange={onPostChange}
            addPost={addPost}
        />
    );
}

export default MyPostsContainer;