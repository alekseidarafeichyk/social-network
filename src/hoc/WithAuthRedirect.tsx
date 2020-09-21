import React from 'react';
import {Redirect} from 'react-router';
import {RootState} from '../redux/redux-store';
import {connect} from 'react-redux';

const mapStateToPropsForRedirect = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {

        render() {

            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}