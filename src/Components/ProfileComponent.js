import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import'./ProfileComponent.scss'
import { visible } from 'ansi-colors';

class ProfileComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ProfileUserName:"Bieber Tsai",
            ProfileUserMotto:"—我菜我驕傲 !!",
            ProfileUserNameAble:true,
            ProfileUserMottoAble:true,
            CVContent:"",
        }
        
    }
    setProfileUserName(word){
        this.setState({ProfileUserName:word})
        console.log(this.state.ProfileUserName)
    }
    setProfileUserMotto(word){
        this.setState({ProfileUserMotto:word})
    }
    setProfileUserAble(){
        this.state.ProfileUserNameAble===false?
        this.setState({ProfileUserNameAble:true})
        :
        this.setState({ProfileUserNameAble:false})
        
        this.state.ProfileUserMottoAble===false?
        this.setState({ProfileUserMottoAble:true})
        :
        this.setState({ProfileUserMottoAble:false})
    }
    setCVContent(word){
        this.setState({CVContent:word})
    }
    
    render(){
        return (
            <div className="ProfileContainer">
                <div className="ProfileInfo">
                    <div className="ProfileUserIcon"/>
                    <textarea type="text" className="ProfileUserName" 
                    disabled={this.state.ProfileUserNameAble} 
                    onChange={(e) => this.setProfileUserName(e.target.value)}>
                    {this.state.ProfileUserName}
                    </textarea>
                    <textarea type="text" className="ProfileUserMotto" 
                    disabled={this.state.ProfileUserMottoAble}
                    onChange={(e) => this.setProfileUserMotto(e.target.value)}>
                    {this.state.ProfileUserMotto}
                    </textarea>
                    <div className="ProfileUserEditIcon" 
                    onClick={()=>this.setProfileUserAble()}
                    >
                    </div>
                </div>
                <div className="ProfileCV" style={
                    this.state.CVContent===""?
                    {flexDirection: 'column'}
                    :
                    {flexDirection: 'row'}}>{
                    this.state.CVContent==="" ?
                    <div className="ProfileCVIcon" 
                    onClick={()=>this.setCVContent("Write Your CV Here")}/>
                    
                    :
                    <textarea className="ProfileCVContent">
                        {this.state.CVContent}
                    </textarea>}
                    
                    {this.state.CVContent==="" ?
                    <div className="UploadCV">
                    Upload your CVs
                    </div>
                    :
                    <div className="ProfileCVEdiIcon"/>

                }
                <div className="ProfileCVUserName" style={
                    this.state.CVContent===""?
                    {
                        display:'none'
                    }
                    :
                    {}
                }>
                    {this.state.ProfileUserName}
                </div>
                </div>
            </div>
        )
    }
}

export default ProfileComponent