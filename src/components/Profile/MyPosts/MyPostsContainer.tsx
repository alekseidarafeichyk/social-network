import React from "react";
import {addPostAC} from "../../../reducers/profile-reducer";
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
        addPost : (text:string) => {
            dispatch(addPostAC(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;