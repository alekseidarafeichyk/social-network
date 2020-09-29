import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {ProfilePageType} from '../../../redux/store';
import {AddNewPostReduxForm, PostFormDataType} from './Post/AddNewPostReduxForm';


type MyPostsPropsType = {
    addPost: (text: string) => void
    posts: ProfilePageType
}

function MyPosts(props: MyPostsPropsType) {
    let postElements = props.posts.posts.map(post => <Post key={post.id} message={post.message}
                                                           likeCounts={post.likeCounts}/>)

    const addNewPost = (value: PostFormDataType) => {
        props.addPost(value.newBodyPost)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <AddNewPostReduxForm onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;