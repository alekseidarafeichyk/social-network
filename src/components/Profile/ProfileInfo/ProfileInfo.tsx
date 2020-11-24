import React, {ChangeEvent, useState} from 'react';
import style from './ProfileInfo.module.css';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileType} from '../../../reducers/ProfileReducer/profile-reducer';
import userPhoto from './../../../assets/images/user.png'
import {ProfileData} from './ProfileData/ProfileData';
import {FormDataType, ProfileDataReduxForm} from './ProfileData/ProfileDataForm';
import {Loader} from '../../common/Loader/Loader';

function ProfileInfo(props: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Loader
        />
    }

    const sendMyPhotoOnServer = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onEditMode = () => {
        setEditMode(true)
    }

    const onSubmit =  (formData: FormDataType) => {
         props.saveProfileData(formData).then(() => {
                 setEditMode(false)
             }
         )
    }

    const profileData = editMode ?
        <ProfileDataReduxForm
            initialValues={props.profile}
            onSubmit={onSubmit}
            contacts={props.profile.contacts}
        /> :
        <ProfileData profile={props.profile}
                     status={props.status}
                     isOwner={props.isOwner}
                     onEditMode={onEditMode}
        />

    return (
        <div className={style.userInfo}>
            <div className={style.photoBlock}>
                <ProfileStatusWithHook {...props}/>
                <img src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type={'file'} onChange={sendMyPhotoOnServer}></input>}
            </div>
            <div className={style.description}>
                {profileData}
            </div>
        </div>
    );
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact = (props: ContactPropsType) => {
    return <div className={style.contact}>{props.contactTitle} : {props.contactValue}</div>
}


export default ProfileInfo;


//types
type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfileData: (profile: any) =>  any
}