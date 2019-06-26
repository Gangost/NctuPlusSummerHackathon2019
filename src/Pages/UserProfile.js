import React from 'react'
import Searchbar from './components/Searchbar'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
import Rating from './components/Rating'
import AboutMe from './components/AboutMe';
import ChatBoard from './components/ChatBoard';
class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <Searchbar />
        <AboutMe />
        <ChatBoard />
        <Rating />
        <ExampleIcon />
      </div>
    )
  }
}

export default UserProfile
