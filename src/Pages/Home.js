import React from 'react'
import styles from './Home.scss'
import HomePageUserBox from './components/HomePageUserBox'
import Searchbar from './components/Searchbar'
import SiteName from './components/SiteName'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
class Home extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <SiteName />
        <Searchbar />
        <div className="d-flex justify-content-around homepage_user mx-auto">
          <HomePageUserBox/>
          <HomePageUserBox/>
          <HomePageUserBox/>
        </div>
        <ExampleIcon />
      </div>
    )
  }
}

export default Home
