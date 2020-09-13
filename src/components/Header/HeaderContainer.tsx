import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {setUserDataAC, AuthStateType} from '../../reducers/AuthReducer/auth-reducer';

type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}

export type MapStatePropsType = {
    auth: AuthStateType
}

type HeaderContainerPropsType = MapDispatchPropsType & MapStatePropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {


        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)
                }
            })
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


export default connect<MapStatePropsType, MapDispatchPropsType,{}, RootState>(mapStateToProps, {setUserData: setUserDataAC})(HeaderContainer)
