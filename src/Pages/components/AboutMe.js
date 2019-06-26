import React from 'react'
import styles from './AboutMe.scss'
import AboutMeLeft from './AboutMeLeft'
import AboutMeRight from './AboutMeRight'
import arrow from '../icons/arrow.png'
import Mark from '../icons/Mark.png'
import Advertisement from './Advertisement';


class AboutMe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    if(this.state.clicked){
      return (
        <div>
          <div className="d-flex justify-content-center">
          <div className="profile_section">
            <AboutMeLeft />
            <AboutMeRight />
          </div>
          <div className="arrow">
            <img src={arrow} alt="arrow" onClick={this.handleClick}/>
          </div>
          <div className="other-users">
            <div className="other-user-profile">
              <img src={Mark} alt="mark"/>
              <div className="other-user-name">Mark</div>
            </div>
            <div className="other-user-profile">
              <img src={Mark} alt="mark"/>
              <div className="other-user-name">Mark</div>
            </div>
          </div>
         </div>
         <Advertisement />
        </div>
      )
    } else {
      return (
        <div>
          <Advertisement />
          <div className="d-flex justify-content-center">
            <div className="profile_section">
              <AboutMeLeft />
              <AboutMeRight />
            </div>
            <div className="arrow">
              <img src={arrow} alt="arrow" onClick={this.handleClick}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default AboutMe
