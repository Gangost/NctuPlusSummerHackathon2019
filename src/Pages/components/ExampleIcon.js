import React from 'react'
import Example from '../icons/example.png'
import Sytles from './Example.scss'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
class ExampleIcon extends React.Component {
  render() {
    return (
      <Link to="/example" className="example">
        <img src={Example} alt="example"/>
      </Link>
    )
  }
}

export default ExampleIcon
