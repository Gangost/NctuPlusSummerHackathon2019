import React from 'react'
import styles from './Example.scss'
import Searchbar from './components/Searchbar'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
import Advertisement from './components/Advertisement';
import ExampleFlexBox from './components/ExampleFlexBox'

class Example extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <Searchbar />
        <Advertisement />
        <ExampleFlexBox />
        <ExampleIcon />
      </div>
    )
  }
}

export default Example
