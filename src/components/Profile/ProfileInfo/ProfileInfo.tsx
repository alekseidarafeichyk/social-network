import React from "react";
import s from './ProfileInfo.module.css';
import {CircularProgress} from '@material-ui/core';


type ProfileInfoPropsType = {
    profile: any
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <CircularProgress disableShrink/>
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/06/1-13.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;