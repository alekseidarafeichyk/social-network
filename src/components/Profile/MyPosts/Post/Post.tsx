import React from "react";
import style from './Post.module.css'


export type PostPropsType = {
    message : string,
    likeCounts: number
    isOwner:boolean
}

function Post(props: PostPropsType) {

    // const postLogo =

    return (
        <div>
            <div className={style.posts}>
                <div className={style.item}>
                    <img
                        src={true ? "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png" : ''}
                       />
                    {props.message}
                    <div>
                        <span>like</span>{props.likeCounts}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;