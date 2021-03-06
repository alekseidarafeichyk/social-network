import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {AuthStateType, logoutTC} from '../../reducers/AuthReducer/auth-reducer';

type MapDispatchPropsType = {
    logoutTC : () => void
}

export type MapStatePropsType = {
    auth: AuthStateType
}

export type HeaderContainerPropsType = MapDispatchPropsType & MapStatePropsType


export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}


const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        auth: state.auth,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {logoutTC})(HeaderContainer)
