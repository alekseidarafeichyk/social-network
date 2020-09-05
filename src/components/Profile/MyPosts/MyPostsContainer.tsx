import React from "react";
import {addPostAC, onPostChangeAC} from "../../../reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';

let mapStateToProps = (state: RootState) => {
    return {
        posts : state.profilePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange : (letter: string) => {
            let action = onPostChangeAC(letter)
            dispatch(action)
        },
        addPost : (text:string) => {
            let action = addPostAC(text)
            dispatch(action)
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;