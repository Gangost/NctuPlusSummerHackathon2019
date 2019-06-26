import React from 'react'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
import ProfileComponent from '../Components/ProfileComponent'
class SelfIntro extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <div className="d-flex justify-content-center align-items-center">
          <ProfileComponent />
        </div>
        <ExampleIcon />
      </div>
    )
  }
}

export default SelfIntro
