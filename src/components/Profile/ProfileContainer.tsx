import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {ProfileType, setUserProfileAC} from '../../reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {usersAPI} from '../../api/api';

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MapStatePropsType = {
    setUserProfile: (profile: ProfileType)=>void
}

type MapDispatchPropsType = {
    profile: ProfileType | null
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, RootState> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
       profile: state.profilePage.profile
    }
}

type PathParamsType = {
    userId: string
}

type ProfileDetailParams = RouteComponentProps<PathParamsType>

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {setUserProfile: setUserProfileAC})(withUrlDataContainerComponent);