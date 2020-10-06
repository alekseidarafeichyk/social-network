import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {changeUserStatus, getUserProfile, getUserStatus, ProfileType} from '../../reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorisedUserId : string
    isAuth: boolean
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
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
            if(!userId) {
                this.props.history.push('login')
            }
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
        status: state.profilePage.status,
        authorisedUserId : state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, changeUserStatus}),
    WithAuthRedirect,
    withRouter,
)(ProfileContainer)