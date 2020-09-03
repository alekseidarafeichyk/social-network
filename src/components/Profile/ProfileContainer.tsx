import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../reducers/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
            .then(response => {
                console.log(userId)
                this.props.setUserProfile(response.data)
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

export default connect(mapStateToProps,  {setUserProfile})(withUrlDataContainerComponent);