import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {getUserProfile, ProfileType} from '../../reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MapStatePropsType = {
    getUserProfile: (userId: string) => void,
}

type MapDispatchPropsType = {
    profile: ProfileType | null
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, RootState> {

    componentDidMount() {
    debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '9442';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile,
    }
}

type PathParamsType = {
    userId: string
}

type ProfileDetailParams = RouteComponentProps<PathParamsType>

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
)(ProfileContainer)