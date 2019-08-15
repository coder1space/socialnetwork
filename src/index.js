import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import './styles/reboot.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderDOM = (state) => {
  ReactDOM.render(
     <BrowserRouter>
       <App
          state           = {store.getState()}
          addPost         = {store.addPost.bind(store)}
          updatePostText  = {store.updatePostText.bind(store)}
       />
     </BrowserRouter>, document.getElementById('root')
  );
}

renderDOM(store.getState());

store.subscribe(renderDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
