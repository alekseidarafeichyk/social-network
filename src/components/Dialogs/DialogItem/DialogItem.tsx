import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: string,
}

function DialogItem(props: DialogItemPropsType) {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;