import React from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {PostType} from "../../redux/state";

type MyPostsType = {
    posts: Array<PostType>,
    addPostCallBack: (postText: string) => void
}

function MyPosts(props: MyPostsType) {

    let postElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
            newPostElement.current.value='';
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea className={s.textarea}
                                  placeholder='write what you wish'
                                  ref={newPostElement}></textarea>
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