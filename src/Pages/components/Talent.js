import React from 'react'
import styles from './Talent.scss'
import bar from '../icons/talent_bar.png'
class Talent extends React.Component {
  render() {
    return (
      <div className="talent-section">
        <div className="talent-name">Photoshop</div>
        <div className="progress">
          <div className="progress-bar bg-success first-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="talent-name">illustrator</div>
        <div className="progress">
          <div className="progress-bar bg-danger second-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    )
  }
}

export default Talent
