import React from "react";
import s from './Post.module.css'

export type PostPropsType = {
    message : string,
    likeCounts: number
}

function Post(props: PostPropsType) {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img
                        src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
                        alt=""/>
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