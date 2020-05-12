import React from 'react'
import Library from './Library'
import CreateDeck from './CreateDeck'
import ViewDeck from './ViewDeck'
import Setting from './Setting'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page: "start"
    }
  }

  goToPage(page){
    this.setState({
      page: page
    })
  }

  render(){
    let page = null
    if (this.state.page == 'title'){
      page = <Library />
    }else if (this.state.page == 'create-deck'){
      page = <CreateDeck />
    }else if (this.state.page == 'view-deck'){
      page = <ViewDeck />
    }else if (this.state.page == 'setting'){
      page = <Setting />
    }else{
      page = (
        <div>
          <a onClick={()=>this.goToPage("title")}>Go to Library</a><br/>
          <a onClick={()=>this.goToPage('create-deck')}>Go to Create Deck</a><br/>
          <a onClick={()=>this.goToPage('view-deck')}>Go to View Deck</a><br/>
          <a onClick={()=>this.goToPage('setting')}>Go to Setting</a>
        </div>
      )
    }

    return (
      <div className="App">
        {page}
      </div>
    )
  }
}

export default App
