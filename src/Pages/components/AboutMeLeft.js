import React from 'react'
import Alice from '../icons/Alice.png'
import small_star from '../icons/small_star.png'
import styles from './AboutMeLeft.scss'

class AboutMeLeft extends React.Component {
  render() {
    return (
      <div className="left-container">
        <div className="photo">
          <img src={Alice} alt="Amy"/>
        </div>
        <div className="d-flex justify-content-between star_container">
          <img src={small_star} alt="Star"/>
          <img src={small_star} alt="Star"/>
          <img src={small_star} alt="Star"/>
        </div>
        <div className="about-me-title">
          About me
        </div>
        <ul class="about-me-list">
          <li>Climbing</li>
          <li>Tea</li>
          <li>Shopping</li>
          <li>Party</li>
        </ul>
      </div>
    )
  }
}

export default AboutMeLeft
