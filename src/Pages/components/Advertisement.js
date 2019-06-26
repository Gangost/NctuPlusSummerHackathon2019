import React from 'react'
import ad1 from '../icons/ad1.svg'
import styles from './Advertisement.scss'

class Advertisement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       close1: false,
       close2: false,
       close3: false
    }
    this.closeAds1 = this.closeAds1.bind(this)
    this.closeAds2 = this.closeAds2.bind(this)
    this.closeAds3 = this.closeAds3.bind(this)
  }
  closeAds1(){
    this.setState({close1: !this.state.close1})
  }
  closeAds2(){
    this.setState({close2: !this.state.close2})
  }
  closeAds3(){
    this.setState({close3: !this.state.close3})
  }

  render() {
    let isClosed1 = this.state.close1 ? "closed" : "notClosed";
    let isClosed2 = this.state.close2 ? "closed" : "notClosed";
    let isClosed3 = this.state.close3 ? "closed" : "notClosed";
    return (
      <div className="d-flex ad-container">
        <div className="ad">
          <div className="close-ad" onClick={this.closeAds1}>x</div>
          <img src={ad1} alt="" className={isClosed1}/>
        </div>
        <div className="ad">
          <div className="close-ad" onClick={this.closeAds2}>x</div>
          <img src={ad1} alt="" className={isClosed2}/>
        </div>
        <div className="ad">
          <div className="close-ad" onClick={this.closeAds3}>x</div>
          <img src={ad1} alt="" className={isClosed3}/>
        </div>
      </div>
    )
  }
}

export default Advertisement
