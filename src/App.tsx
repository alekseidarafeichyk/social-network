import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './components/redux/state'
import News from "./components/News/News";
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Dialogs from "./components/Dialogs/Dialogs";

type AppType = {
    state: RootStateType
    addPostCallBack: (postText: string) => void
    updateNewPostText: (newText: string) => void
    addMessageCallBack: (messageText: string) => void
    updateNewMessageText: (newMessage: string) => void
}


function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile posts={props.state.profilePage}
                                                  addPostCallBack={props.addPostCallBack}
                                                  updateNewPostText={props.updateNewPostText}
                           />}

                    />
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                    addMessageCallBack={props.addMessageCallBack}
                                                                    updateNewMessageText={props.updateNewMessageText}
                    />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
