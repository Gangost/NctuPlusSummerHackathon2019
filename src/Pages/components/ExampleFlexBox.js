import React from 'react'
import styles from './ExampleFlexBox.scss'
import cv from '../icons/cv.svg'

class ExampleFlexBox extends React.Component {
  render () {
    return (
      <div className="outer-container">
        <div className="flex-wrap cv-container">
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
          <div className="cv-div"><img src={cv} alt=""/></div>
        </div>
      </div>
    )
  }
}

export default ExampleFlexBox
