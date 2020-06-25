import React, {ChangeEvent} from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {PostType, ProfilePageType} from "../../redux/state";

type MyPostsType = {
    posts: ProfilePageType,
    addPostCallBack: (postText: string) => void,
    updateNewPostText: (updateText: string) => void,
}

function MyPosts(props: MyPostsType) {

    let postElements = props.posts.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts}/>)

    //let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value
        //     props.addPostCallBack(props.posts.newPostText)
        // }
        props.addPostCallBack(props.posts.newPostText)
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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