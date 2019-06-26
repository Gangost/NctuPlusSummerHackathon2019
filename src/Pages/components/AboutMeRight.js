import React from 'react'
import styles from './AboutMeRight.scss'
import Talent from './Talent'
import axios from 'axios'

class AboutMeRight extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      school: "",
      department: "",
      age: ""
    }
    this.fetchData = this.fetchData.bind(this)
    this.changeState = this.changeState.bind(this)
  }
  componentWillMount(){
    this.fetchData()
  }
  fetchData(){
    let url = `http://172.18.13.77:3000/users/18`
    console.log('url is')
    console.log(url)
    axios.get(url)
    .then(response => {
      this.changeState(response.data)
      console.log(this.state.name)
    }
    )
    .catch(err => console.log(err))
  }
  changeState(data){
    this.setState({
      name: data.name,
      school: data.school,
      department: data.department,
      age: data.age
    })
  }
  render() {
    return (
      <div className="right-container">
        <div className="user-name" onClick={this.fetchData}>{this.state.name}</div>
        <div className="user-state">{this.state.school + "   " + this.state.department + "   " + this.state.age + 'yrs'}</div>
        <Talent />
      </div>
    )
  }
}

export default AboutMeRight
