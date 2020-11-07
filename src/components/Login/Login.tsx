import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginReduxForm';
import {connect} from 'react-redux';
import {loginTC} from '../../reducers/AuthReducer/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router';


type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean,captcha: string | null) => void
    isAuth: boolean
    captcha: null | string
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>)
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}


export default connect(mapStateToProps, {loginTC})(Login);