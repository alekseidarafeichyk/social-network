import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {AuthStateType, getAuthUserData} from '../../reducers/AuthReducer/auth-reducer';

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type MapStatePropsType = {
    auth: AuthStateType
}

type HeaderContainerPropsType = MapDispatchPropsType & MapStatePropsType


export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}


const mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        auth: state.auth,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mapStateToProps, {getAuthUserData})(HeaderContainer)
