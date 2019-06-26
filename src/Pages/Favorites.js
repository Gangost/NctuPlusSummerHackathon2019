import React from 'react'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
import FavoriteIcon from './components/FavoriteIcon';
import FavoriteComponent from '../Components/FavoriteComponent.js'
class Favorites extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <FavoriteIcon />
        <FavoriteComponent />
        <ExampleIcon />
      </div>
    )
  }
}

export default Favorites
