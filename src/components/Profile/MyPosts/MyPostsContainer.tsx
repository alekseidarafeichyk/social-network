import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";

function MyPostsContainer() {

    return <StoreContext.Consumer>
        {
            (store) => {
                let posts = store.getState().profilePage

                const onPostChange = (letter: string) => {
                    let action = onPostChangeActionCreator(letter)
                    store.dispatch(action)
                }
                const addPost = (text: string) => {
                    let action = addPostActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts onPostChange={onPostChange}
                                addPost={addPost}
                                posts={posts}/>
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;