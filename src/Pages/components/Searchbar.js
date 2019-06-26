import React from 'react'
import styles from './Searchbar.scss'
import search from '../icons/search.png'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class Searchbar extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="searchbar" type="text" placeholder="  Search..." aria-label="Search" />
        <Link to="./search_page" className="search-btn" />
        <i>
          <Link to="./search_page" className="search-btn">
          <img src={search} alt="search_icon"></img>
          </Link>
        </i>
        {/* <button>
        <i>
          <img src={search} alt="search_icon"></img>
        </i>
        </button> */}
        {/* <span>
          <img src={search} alt="search_icon"></img>
        </span> */}
      </div>
    )
  }
}

export default Searchbar
