import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializedAppTC} from './reducers/AuthReducer/appReducer';
import {RootState} from './redux/redux-store';
import {CircularProgress} from '@material-ui/core';

type MapDispatchToPropsType = {
    initializedApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType, RootState> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <CircularProgress disableShrink
                                     size={100}/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {initialized: state.app.initialized}
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp: initializedAppTC}))
(App)

