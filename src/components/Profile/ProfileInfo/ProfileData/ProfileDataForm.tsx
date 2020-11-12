import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {required} from '../../../../utils/validators/validators';
import {ContactsType} from '../../../../reducers/ProfileReducer/profile-reducer';
import style from '../../../common/FormsControls/FormsControls.module.css';

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
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            Full name: <Field placeholder={'Full name'}
                              name={'fullName'}
                              component={Input}
                              validate={[required]}/>
        </div>
        <div>
            About me: <Field placeholder={'About Me'}
                             name={'aboutMe'}
                             component={Textarea}
                             validate={[required]}/>
        </div>
        <div>
            <label htmlFor="lookingForAJob"> Looking for a job:</label>
            <Field
                name={'lookingForAJob'}
                component={Input}
                type="checkbox"
            />
        </div>
        <div>
            My professional skills: <Field placeholder={'My professional skills'}
                                           name={'lookingForAJobDescription'}
                                           component={Textarea}/>
        </div>
        <div> Contacts :
            {Object.keys(props.contacts).map((el) => {
                return <Field placeholder={el}
                              name={`contacts.` + el}
                              component={Input}
                />
            })}
            {<button type={'submit'}>Save</button>}
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<FormDataType, ContactsPropsType>({form: 'edit-profile'})(ProfileDataForm)
