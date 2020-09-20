import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {getUserProfile, ProfileType} from '../../reducers/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router';

type ProfileContainerPropsType = ProfileDetailParams & OwnPropsType

type MapStatePropsType = {
    getUserProfile: (userId : string)=>void,
    isAuth: boolean
}

type MapDispatchPropsType = {
    profile: ProfileType | null
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, RootState> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '9442';
        }
        this.props.getUserProfile(userId)
    }


    render() {
        debugger
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
       profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

type PathParamsType = {
    userId: string
}

type ProfileDetailParams = RouteComponentProps<PathParamsType>

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {getUserProfile})(withUrlDataContainerComponent);