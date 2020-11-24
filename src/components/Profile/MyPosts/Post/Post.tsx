import React from "react";
import style from './Post.module.css'


export type PostPropsType = {
    message : string,
    likeCounts: number
    myPhoto: string | undefined
}

function Post(props: PostPropsType) {

   const srcImg = props.myPhoto ? props.myPhoto : "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"

    return (
        <div>
            <div className={style.posts}>
                <div className={style.item}>
                    <img src={srcImg}/>
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