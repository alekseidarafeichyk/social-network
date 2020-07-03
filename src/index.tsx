import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, {StoreType} from "./components/redux/state"
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                // addPostCallBack={store.addPostCallBack.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addMessageCallBack={store.addMessageCallBack.bind(store)}
                // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
