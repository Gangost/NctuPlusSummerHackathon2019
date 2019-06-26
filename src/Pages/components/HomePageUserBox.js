import React from 'react'
import Amy from '../icons/Amy.png'
import Star from '../icons/star.png'
import Styles from './HomePageUserBox.scss'
class HomePageUserBox extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column bd-highlight mb-3 user-box">
        <div className="mx-auto homepage_user_name">Amy</div>
        <div>
          <img src={Amy} alt="Amy"/>
        </div>
        <div className="d-flex justify-content-between star_container">
          <img src={Star} alt="Star"/>
          <img src={Star} alt="Star"/>
          <img src={Star} alt="Star"/>
        </div>
      </div>
    )
  }
}

export default HomePageUserBox
