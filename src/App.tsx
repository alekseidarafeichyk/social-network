import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import {initializedAppTC} from './reducers/AuthReducer/appReducer';
import store, {RootState} from './redux/redux-store';
import {CircularProgress} from '@material-ui/core';
import {WithSuspense} from './hoc/WithSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Setting = React.lazy(() => import('./components/Setting/Setting'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


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
                    <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                    <Route path={'/news'} render={WithSuspense(News)}/>
                    <Route path={'/music'} render={WithSuspense(Music)}/>
                    <Route path={'/setting'} render={WithSuspense(Setting)}/>
                    <Route path={'/users'} render={WithSuspense(UsersContainer)}/>
                    <Route path={'/login'} render={WithSuspense(Login)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {initialized: state.app.initialized}
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp: initializedAppTC}))
(App)

let SocialTSApp = (props: any) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialTSApp

