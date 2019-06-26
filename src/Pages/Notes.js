import React from 'react'
import HomePageIcons from './components/HomePageIcons'
import ExampleIcon from './components/ExampleIcon';
import NotesIcon from './components/NotesIcon';
import TextComponent from '../Components/TextComponent.js'
class Notes extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <NotesIcon />
        <TextComponent />
        <ExampleIcon />
      </div>
    )
  }
}

export default Notes
