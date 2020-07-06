import React, {ChangeEvent} from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {ActionsType, ProfilePageType} from "../../redux/state";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";

type MyPostsType = {
    posts: ProfilePageType,
    dispatch: (action: ActionsType) => void
}


function MyPosts(props: MyPostsType) {

    let postElements = props.posts.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts}/>)

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let letter = e.currentTarget.value
        let action = onPostChangeActionCreator(letter)
        props.dispatch(action)
    }


    const addPost = () => {
        let text= props.posts.newPostText
        let action = addPostActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea
                            value={props.posts.newPostText}
                            onChange={onPostChange}
                            className={s.textarea}
                            placeholder='write what you wish'
                        />
                    </div>
                    <div>
                        <button className={s.btn} onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;