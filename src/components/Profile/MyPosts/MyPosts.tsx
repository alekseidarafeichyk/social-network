import React, {ChangeEvent} from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {ProfilePageType} from "../../redux/store";
import {v1} from 'uuid';

type MyPostsType = {
    onPostChange: (letter: string) => void
    addPost: (text: string) => void
    posts: ProfilePageType
}

function MyPosts(props: MyPostsType) {
    let postElements = props.posts.posts.map(post => <Post key={post.id} message={post.message} likeCounts={post.likeCounts}/>)

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let letter = e.currentTarget.value
        props.onPostChange(letter)
    }

    const addPost = () => {
        let text = props.posts.newPostText
        props.addPost(text)
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