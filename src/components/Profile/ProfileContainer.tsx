import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {changeUserStatus, getUserProfile, getUserStatus, ProfileType} from '../../reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';



type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    changeUserStatus: (newStatus: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}

type ProfileDetailParams = RouteComponentProps<PathParamsType>

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType, RootState> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '9442';
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         changeUserStatus={this.props.changeUserStatus}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus, changeUserStatus}),
    withRouter,
)(ProfileContainer)