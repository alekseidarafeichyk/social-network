import React from 'react';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import {AddNewPostReduxForm, PostFormDataType} from './Post/AddNewPostReduxForm';
import {ProfilePageType} from '../../../reducers/ProfileReducer/profile-reducer';
import {reset} from 'redux-form';
import {useDispatch} from 'react-redux';


type MyPostsPropsType = {
    addPost: (text: string) => void
    posts: ProfilePageType
    myPhoto: string | undefined
}


const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postElements = props.posts.posts.map(post => <Post key={post.id} message={post.message}
                                                           likeCounts={post.likeCounts}
                                                           myPhoto={props.myPhoto}

    />)
    const dispatch = useDispatch()


    const addNewPost = (value: PostFormDataType) => {
        props.addPost(value.newBodyPost)
        dispatch(reset('post'))
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