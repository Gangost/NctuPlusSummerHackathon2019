import React from 'react'
import blankStar from '../icons/blank_star.png'
import styles from './Rating.scss'

class Rating extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="rate_title">Rate : </div>
        <div className="star_container d-flex justify-content-around">
          <div className="blank_star">
          <img src={blankStar} alt="blank_star"/>
          </div>
          <div className="blank_star">
          <img src={blankStar} alt="blank_star"/>
          </div>
          <div className="blank_star">
          <img src={blankStar} alt="blank_star"/>
          </div>
          <div className="blank_star">
          <img src={blankStar} alt="blank_star"/>
          </div>
          <div className="blank_star">
          <img src={blankStar} alt="blank_star"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Rating
