import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {required} from '../../../../utils/validators/validators';
import {ContactsType} from '../../../../reducers/ProfileReducer/profile-reducer';
import style from '../../../common/FormsControls/FormsControls.module.css';
import styleField from './ProfileData.module.css'
import {Button} from '../../../common/Button/Button';

export type FormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

export type ContactsPropsType = {
    contacts: ContactsType
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, ContactsPropsType> & ContactsPropsType> = (props) => {

    const contacts = Object.keys(props.contacts).map((el) => {
        return <div className={style.contact}>
        <Field placeholder={el}
                      name={`contacts.` + el}
                      component={Input}
        />
        </div>
    })

    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div className={styleField.field}>
            Full name: <Field placeholder={'Full name'}
                              name={'fullName'}
                              component={Input}
                              validate={[required]}/>
        </div>
        <div className={styleField.field}>
            About me: <Field placeholder={'About Me'}
                             name={'aboutMe'}
                             component={Textarea}
                             validate={[required]}/>
        </div>
        <div className={styleField.field}>
            <label htmlFor="lookingForAJob"> Looking for a job:</label>
            <Field
                name={'lookingForAJob'}
                component={Input}
                type="checkbox"
            />
        </div>
        <div className={styleField.field}>
            My professional skills: <Field placeholder={'My professional skills'}
                                           name={'lookingForAJobDescription'}
                                           component={Textarea}/>
        </div>
        <div className={styleField.field}> Contacts :
            {contacts}
            <Button type={'submit'} name={'Save'}/>
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<FormDataType, ContactsPropsType>({form: 'edit-profile'})(ProfileDataForm)
