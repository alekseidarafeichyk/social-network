import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    changeUserStatus: (newStatus: string) => void
}

export const ProfileStatusWithHook = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.changeUserStatus(status)
    }

    const onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {
                editMode ?
                    <div style={{margin:'10px'}}>
                       Status: <input onBlur={offEditMode}
                               type="text"
                               autoFocus
                               value={status}
                               onChange={onChangeStatusText}
                        />
                    </div>
                    :
                    <div style={{margin:'10px'}}>
                      Status : <span onDoubleClick={onEditMode}>{props.status || 'No status'}</span>
                    </div>
            }
        </>
    )
}
