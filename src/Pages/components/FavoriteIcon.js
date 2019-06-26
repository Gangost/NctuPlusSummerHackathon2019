import React from 'react'
import bookmark from '../icons/bookmark.svg'
import styles from './FavoriteIcon.scss'
class FavoriteIcon extends React.Component {
  render () {
    return (
      <div className="favorites-icon-container">
        <span>Favorites      </span>
        <img src={bookmark} alt="" className="favorites-icon"/>
      </div>
    )
  }
}

export default FavoriteIcon
