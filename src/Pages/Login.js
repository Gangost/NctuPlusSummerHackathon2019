import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import'./Login.scss'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            UserName:"",
            PassWord:""
        }
        this.setUserName=this.setUserName.bind(this)
        this.setPassWord=this.setPassWord.bind(this)
    }
    setUserName(word){
        console.log(word)
        this.setState({Username:word})
    }
    setPassWord(word){
        console.log(word)
        this.setState({PassWord:word})
    }
    render(){
        return(
          <div className="login-outer-container">
            <div className="LoginContainer">
            <Link to='/' className="cross">x</Link>
                <h1>
                    Share 實習知
                </h1>
                <div className="LoginBlock">
                        <div className="Icon2">

                        </div>
                    <div className="Fb">
                        Sign in with Facebook
                    </div>
                    <div className="Google">
                        Sign in with Google
                    </div>
                    <div className="User">
                        <div className="Icon1">
                            <div className="Icon11">
                            </div>
                        </div>
                        <input type="text" className="UserInput"
                        onChange={(e) => this.setUserName(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="PassWord">
                    <div className="Icon1">
                            <div className="Icon12">
                            </div>
                            </div>
                            <input type="text" className="PassInput"
                            onChange={(e) => this.setPassWord(e.target.value)}
                            >
                        </input>
                    </div>
                </div>
                <div className="SignButton">
                    Sign up
                </div>
                <div className="LogButton">
                    Log in
                </div>
            </div>
          </div>
        )
    }
}

export default Login