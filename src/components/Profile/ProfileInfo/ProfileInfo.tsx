import React, {ChangeEvent} from 'react';
import style from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileType} from '../../../reducers/ProfileReducer/profile-reducer';
import userPhoto from './../../../assets/images/user.png'


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <CircularProgress
            disableShrink
            size={100}
        />
    }

    const sendMyPhotoOnServer = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={style.img}>
                <ProfileStatusWithHook {...props}/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type={'file'} onChange={sendMyPhotoOnServer}></input>}
            </div>
        </div>
    );
}

export default ProfileInfo;