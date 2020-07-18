import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';

let mapStateToProps = (state: RootState) => {
    return {
        posts : state.profilePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange : (letter: string) => {
            let action = onPostChangeActionCreator(letter)
            dispatch(action)
        },
        addPost : (text:string) => {
            let action = addPostActionCreator(text)
            dispatch(action)
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;