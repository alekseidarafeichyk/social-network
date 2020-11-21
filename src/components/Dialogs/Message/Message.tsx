import React from "react";
import style from './Message.module.css'

type MessageTypeProps = {
    message: string,
};

function Message(props: MessageTypeProps) {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}

export default Message;
