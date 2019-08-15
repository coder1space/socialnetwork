import React from 'react';
import styles from './App.module.scss';
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import {Route} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";

function App(props) {
  return (
    <div className={styles.App}>
      <div className={styles.siteGrid}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h3>Branding</h3>
          </div>
        </header>
        <div className={`${styles.contentGrid} ${styles.container}`}>
          <aside className={styles.sidebar}>
            <Navigation/>
            <h3>Friends</h3>
          </aside>
          <main className={styles.content}>
            <Route exact path="/" component={()=><Home/>} />
            <Route path="/home" component={()=><Home/>} />
            <Route path="/profile" component={()=><Profile profilePage={props.state.profile} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
            <Route path="/messages" component={()=><Messages messagesPage={props.state.IM}/>} />
          </main>
        </div>
        <div className={styles.footer}>
          <div className={styles.container}>
            <span>Copyright 2019 - All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
