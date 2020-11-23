import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import {AddNewPostReduxForm, PostFormDataType} from './Post/AddNewPostReduxForm';
import {ProfilePageType} from '../../../reducers/ProfileReducer/profile-reducer';


type MyPostsPropsType = {
    addPost: (text: string) => void
    posts: ProfilePageType
    isOwner: boolean
}


const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postElements = props.posts.posts.map(post => <Post key={post.id} message={post.message}
                                                           likeCounts={post.likeCounts}
                                                           isOwner={props.isOwner}
    />)
    const addNewPost = (value: PostFormDataType) => {
        props.addPost(value.newBodyPost)
    }

    return (
        <div>
            <div className={style.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <AddNewPostReduxForm onSubmit={addNewPost}/>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
});

export default MyPosts;