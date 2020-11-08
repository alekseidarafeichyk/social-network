import React, {ChangeEvent, useState} from 'react';
import style from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileType} from '../../../reducers/ProfileReducer/profile-reducer';
import userPhoto from './../../../assets/images/user.png'
import {ProfileData} from './ProfileData/ProfileData';
import {FormDataType, ProfileDataReduxForm} from './ProfileData/ProfileDataForm';

function ProfileInfo(props: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)

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

    const onEditMode = () => {
        setEditMode(true)
    }

    const onSubmit =  (formData: FormDataType) => {
         props.saveProfileData(formData).then(() => {
                 setEditMode(false)
             }
         )
    }

    return (
        <div>
            <div className={style.img}>
                <ProfileStatusWithHook {...props}/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type={'file'} onChange={sendMyPhotoOnServer}></input>}

                {editMode ?
                    <ProfileDataReduxForm
                        initialValues={props.profile}
                        onSubmit={onSubmit}
                        contacts={props.profile.contacts}
                    /> :
                    <ProfileData profile={props.profile}
                                 status={props.status}
                                 isOwner={props.isOwner}
                                 onEditMode={onEditMode}

                    />}

            </div>
        </div>
    );
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact = (props: ContactPropsType) => {
    return <div>{props.contactTitle} : {props.contactValue}</div>
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