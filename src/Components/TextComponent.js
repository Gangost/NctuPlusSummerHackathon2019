import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './TextComponent.scss'

class TextComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Card1Input: "血汗工廠，巴拉拉。\n沒血沒淚，爆肝啦～～～～～\n無良心企業，只會賣肝啦！！！\n十萬青年十萬肝，台積輪班救台灣。",
      Card2Input: "新創公司，員工福利優\n工作休閒兩者兼具。\n巴拉拉哇嗚哇嗚去說",
      Card3Input: "新創公司，員工福利優\n工作休閒兩者兼具。\n巴拉拉哇嗚哇嗚去說",
      Card1Able: true,
      Card2Able: true,
      Card3Able: true,
    }
  }
  setCard1Input(word) {
    console.log(word)
    this.setState({ Card1Input: word })
  }
  setCard1Able() {
    this.state.Card1Able === false ?
      this.setState({ Card1Able: true })
      :
      this.setState({ Card1Able: false })
  }
  setCard2Input(word) {
    console.log(word)
    this.setState({ Card2Input: word })
  }
  setCard2Able() {
    this.state.Card2Able === false ?
      this.setState({ Card2Able: true })
      :
      this.setState({ Card2Able: false })
  }
  setCard3Input(word) {
    console.log(word)
    this.setState({ Card3Input: word })
  }
  setCard3Able() {
    this.state.Card3Able === false ?
      this.setState({ Card3Able: true })
      :
      this.setState({ Card3Able: false })
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="NoteContainer">
          <div className="NoteCard">
            <div className="NoteCardIcon">
            </div>
            <textarea className="NoteCardInput" type="text"
              disabled={this.state.Card1Able}
            >
              {this.state.Card1Input}
            </textarea>
            <div className="NoteCardEditIcon"
              onClick={() => this.setCard1Able()}
            >
            </div>
          </div>
          <div className="NoteCard">
            <div className="NoteCardIcon">
            </div>
            <textarea className="NoteCardInput" type="text"
              disabled={this.state.Card2Able}
            >
              {this.state.Card2Input}
            </textarea>
            <div className="NoteCardEditIcon"
              onClick={() => this.setCard2Able()}
            >
            </div>
          </div>
          <div className="NoteCard">
            <div className="NoteCardIcon">
            </div>
            <textarea className="NoteCardInput" type="text"
              disabled={this.state.Card3Able}
            >
              {this.state.Card3Input}
            </textarea>
            <div className="NoteCardEditIcon"
              onClick={() => this.setCard3Able()}
            >
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default TextComponent