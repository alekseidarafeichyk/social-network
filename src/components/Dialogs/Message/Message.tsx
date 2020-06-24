import React from "react";
import s from './Message.module.css'

type MessageTypeProps = {
    message: string,
};

function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default Message;
