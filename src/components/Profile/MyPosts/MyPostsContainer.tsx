import React, {Dispatch} from 'react';
import {addPostAC} from "../../../reducers/ProfileReducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';

let mapStateToProps = (state: RootState) => {
    return {
        posts : state.profilePage,
        myPhoto: state.profilePage.profile?.photos.small
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ReturnType<typeof addPostAC>>) => {
    return {
        addPost :  (text:string) => {
            dispatch(addPostAC(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;