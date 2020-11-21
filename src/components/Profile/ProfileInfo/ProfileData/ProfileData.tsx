import {ProfileType} from '../../../../reducers/ProfileReducer/profile-reducer';
import React from 'react';
import {Contact} from '../ProfileInfo';
import style from './ProfileData.module.css'

type ProfileDataPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    onEditMode: () => void
}
export const ProfileData = (props: ProfileDataPropsType) => {
    return <div>
        <div className={style.field}>
            Full name: {props.profile.fullName}
        </div>
        <div className={style.field}>
            About me: {props.profile.aboutMe}
        </div>
        <div className={style.field}>
            Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJob && <div className={style.field}>
            My skills: {props.profile.lookingForAJobDescription}
        </div>}
        <div className={style.field}>Status: {props.status}</div>
        <div className={style.field}> Contacts :
            {Object.keys(props.profile.contacts).map((el) => <Contact key={el}
                                                                      contactValue={props.profile?.contacts[el]}
                                                                      contactTitle={el}/>)}
        </div>
        {props.isOwner && <button onClick={props.onEditMode}>Edit Profile</button>}
    </div>
}