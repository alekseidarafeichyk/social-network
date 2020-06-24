import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStateType} from './components/redux/state'



const rerenderEntireTree = (props: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;
