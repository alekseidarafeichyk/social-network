import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import userImage from './../../../assets/images/user.png'

type DialogItemPropsType = {
    name: string,
    id: string,
}

function DialogItem(props: DialogItemPropsType) {
    let path = "/dialogs/" + props.id

    return (
        <div className={style.dialog}>
            <img src={userImage} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;