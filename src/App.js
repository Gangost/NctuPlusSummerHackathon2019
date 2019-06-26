import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import UserProfile from './Pages/UserProfile'
import Example from './Pages/Example'
import Notes from './Pages/Notes'
import SelfIntro from './Pages/SelfIntro'
import SearchPage from './Pages/SearchPage'
class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
        <Route exact path="/" component={ Home }></Route>
        <Switch>
          <Route exact path="/login" component={ Login }></Route>
          <Route exact path="/profile" component={ UserProfile }></Route>
          <Route exact path="/example" component={ Example }></Route>
          <Route exact path="/favorites" component={ Favorites }></Route>
          <Route exact path="/notes" component={ Notes }></Route>
          <Route exact path="/selfintro" component={ SelfIntro }></Route>
          <Route exact path="/search_page" component={ SearchPage }></Route>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
