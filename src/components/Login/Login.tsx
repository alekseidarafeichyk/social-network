import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginReduxForm';
import {connect} from 'react-redux';
import {loginTC} from '../../reducers/AuthReducer/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router';
import style from './Login.module.css'


type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    isAuth: boolean
    captcha: null | string
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={style.loginContainer}>
            <div className={style.login}>
                <div>
                    <p>To log in get registered here <a href='https://social-network.samuraijs.com/'>here</a></p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </div>
                <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
            </div>
        </div>)
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}


export default connect(mapStateToProps, {loginTC})(Login);