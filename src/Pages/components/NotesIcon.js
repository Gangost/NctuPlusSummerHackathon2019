import React from 'react'
import notes from '../icons/notes.svg'
import styles from './NotesIcon.scss'
class NotesIcon extends React.Component {
  render () {
    return (
      <div className="notes-icon-container">
        <span>Notes      </span>
        <img src={notes} alt="" className="notes-icon"/>
      </div>
    )
  }
}

export default NotesIcon
