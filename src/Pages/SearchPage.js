import React from 'react'
import HomePageIcons from './components/HomePageIcons'
import SearchBar from './components/Searchbar'
import ExampleIcon from './components/ExampleIcon';
import SearchPageComponent from '../Components/SearchPageComponent'
class SearchPage extends React.Component {
  render () {
    return (
      <div>
        <HomePageIcons />
        <SearchBar />
        <div className="d-flex justify-content-center align-items-center">
          <SearchPageComponent />
        </div>
        <ExampleIcon />
      </div>
    )
  }
}

export default SearchPage
