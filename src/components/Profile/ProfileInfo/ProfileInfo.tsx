import React from 'react';
import style from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';


type ProfileInfoPropsType = {
    profile: any
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
                {/*<img src="https://bipbap.ru/wp-content/uploads/2017/06/1-13.jpg" alt=""/>*/}
                {/* eslint-disable-next-line react/jsx-no-undef */}
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