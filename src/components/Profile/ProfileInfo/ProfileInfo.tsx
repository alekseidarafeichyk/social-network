import React from 'react';
import style from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileType} from '../../../reducers/ProfileReducer/profile-reducer';


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (newStatus: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <CircularProgress
            disableShrink
            size={100}
        />
    }
    return (
        <div>
            <div className={style.img}>
                <ProfileStatusWithHook {...props}/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;