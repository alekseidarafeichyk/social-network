import React, {ChangeEvent} from 'react';
import style from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileType} from '../../../reducers/ProfileReducer/profile-reducer';
import userPhoto from './../../../assets/images/user.png'

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
                <div>
                    Full name: {props.profile.fullName}
                </div>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <div>
                    Looking for a job:  {props.profile.lookingForAJob}
                </div>
                <div> Contacts :
                     <div>facebook: {props.profile.contacts?.facebook}</div>
                     <div>website: {props.profile.contacts?.website}</div>
                     <div>vk: {props.profile.contacts?.vk}</div>
                     <div>twitter: {props.profile.contacts?.twitter}</div>
                     <div>instagram: {props.profile.contacts?.instagram}</div>
                     <div>youtube: {props.profile.contacts?.youtube}</div>
                     <div>github: {props.profile.contacts?.github}</div>
                     <div>mainLink: {props.profile.contacts?.mainLink}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

//types
type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}