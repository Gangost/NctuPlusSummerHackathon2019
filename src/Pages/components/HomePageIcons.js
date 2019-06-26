import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import message from '../icons/messages.png'
import notes from '../icons/notes.png'
import bookmark from '../icons/bookmark.png'
import profile from '../icons/profile.png'
import logo from '../icons/Logo.png'
import styles from './HomePageIcons.scss'
import { red } from 'ansi-colors';
import { spawn } from 'child_process';

class HomePageIcons extends React.Component {
  render() {
    return (
      <div> 
        <Link to='/' className="logo">
          <img src={logo} alt="logo"/>
        </Link>
        <div className="d-flex justify-content-end small-icons">
          <div className="d-flex justify-content-between">
            <Link to='/' className="icons">
              <img src={message} alt="no"></img>
            </Link>
            <Link to='/notes' className="icons">
              <img src={notes} alt="notes"></img>
            </Link>
            <Link to='/favorites' className="icons">
              <img src={bookmark} alt="bookmark"></img>
            </Link>
            <Link to='/login' className="icons">
              <img src={profile} alt="profile"></img>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageIcons
