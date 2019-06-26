import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './FavoriteComponent.scss'

class FavoriteComponent extends React.Component{
    render(){
        return(
          <div className="d-flex justify-content-center favorites-outer-container">
            <div className="FavoriteContainer">
                <div className="Icon"/>
                <div className="Icon"/>
                <div className="Icon"/>
                <div className="Title">
                        介面設計師<br></br>
                        ...........................
                </div>
                 <div className="Title2">
                        網站管理員<br></br>
                        ...........................
                </div>
                <div className="Title3">
                         後端資料庫<br></br>
                        ...........................
                        </div>
                </div>
          </div>
        )
    }
}
export default FavoriteComponent