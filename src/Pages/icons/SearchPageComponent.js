import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import'./SearchPageComponent.scss'

class SearchPageComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            SearchPageComponentCardTitleName:"Cool Company",
            SearchPageComponentCardTitleDescribe:"UI/UX Designer Intern",
            SearchPageComponentCardContent:"・工作內容：協助專案迭代設計、Wireframe\n・必備技能：Photoshop、Illustrator、Adobe XD\n・薪資待遇：$200/hr",
            SearchPageComponentNoteContent:"Write down your notes…",
            SearchPageComponentNoteContentAble:true
        }
        this.setSearchPageComponentNoteContent=this.setSearchPageComponentNoteContent.bind(this)
    }
    setSearchPageComponentNoteContent(word){
        this.setState({SearchPageComponentNoteContent:word})
        console.log(this.state.SearchPageComponentNoteContent)
    }
    setSearchPageComponentNoteContentAble(){
        this.setState({SearchPageComponentNoteContentAble:false})
        console.log(this.state.SearchPageComponentNoteContent)
    }
    
    render(){
        
        return(
            <div className="SearchePageComponentContainer">
                <div className="SearchePageComponentCard">
                    <div className="SearchPageComponentCardIcon"/>
                    <div className="SearchPageComponentCardTitle">
                        {this.state.SearchPageComponentCardTitleName}
                        <br></br>
                        {this.state.SearchPageComponentCardTitleDescribe}
                    </div>
                    <div className="SearchPageComponentCardFavoriteIcon"/>
                </div>
                <textarea className="SearchPageComponentCardContent" disabled={true}>
                    {this.state.SearchPageComponentCardContent}
                    </textarea>
                <div className="SearchPageComponentNote">
                    <div className="SearchPageComponentNoteTitle" 
                        onClick={()=>this.setSearchPageComponentNoteContentAble()}
                    >
                        <div className="SearchPageComponentNoteTitleIcon"/>
                        <div className="SearchPageComponentNoteTitleText">
                        Take notes…
                        </div>
                    </div>
                    <textarea className="SearchPageComponentNoteContent" style={
                        this.state.SearchPageComponentNoteContentAble===true?
                        {display:"none"}
                        :
                        {}
                    }
                    onChange={(e) => this.setSearchPageComponentNoteContent(e.target.value)}
                    >
                        {this.state.SearchPageComponentNoteContent}
                        
                    </textarea>
                </div>
                
            </div>
        )
    }
}

export default SearchPageComponent