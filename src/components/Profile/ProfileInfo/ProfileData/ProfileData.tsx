import {ProfileType} from '../../../../reducers/ProfileReducer/profile-reducer';
import React from 'react';
import {Contact} from '../ProfileInfo';

type ProfileDataPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    onEditMode: () => void
}
export const ProfileData = (props: ProfileDataPropsType) => {
    return <div>
        {props.isOwner && <button onClick={props.onEditMode}>Edit Profile</button>}
        <div>
            Full name: {props.profile.fullName}
        </div>
        <div>
            About me: {props.profile.aboutMe}
        </div>
        <div>
            Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJob && <div>
            My skills: {props.profile.lookingForAJobDescription}
        </div>}
        <div>Status: {props.status}</div>
        <div> Contacts :
            {Object.keys(props.profile.contacts).map((el) => <Contact key={el}
                                                                      contactValue={props.profile?.contacts[el]}
                                                                      contactTitle={el}/>)}
        </div>
    </div>
}