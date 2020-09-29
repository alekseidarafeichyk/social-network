import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginReduxForm';
import {connect} from 'react-redux';
import {AuthStateType, loginTC} from '../../reducers/AuthReducer/auth-reducer';
import {RootState} from '../../redux/redux-store';
import {Redirect} from 'react-router';


type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email,formData.password,formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}

const mapStateToProps = (state:RootState)  => {
    return {
        isAuth : state.auth.isAuth
    }
}



export default connect(mapStateToProps,{loginTC})(Login);