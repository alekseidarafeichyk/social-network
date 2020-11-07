import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import style from '../common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export type LoginPropsType = {
    captcha: null | string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType,LoginPropsType> & LoginPropsType > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                       type={'password'}
                />
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}
                /> remember me
            </div>
            {props.captcha && <img src={props.captcha}/>}
            {props.captcha &&  <Field component={'input'}
                                      name={'captcha'}
                                      />}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType,LoginPropsType>({form: 'login'})(LoginForm)
