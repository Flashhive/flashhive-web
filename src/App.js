import React from 'react'
import Library from './Library'
import CreateDeck from './CreateDeck'
import ViewDeck from './ViewDeck'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page: "title"
    }
  }

  render(){
    let page = null
    if (this.state.page == 'title'){
      page = <Library />
    }else if (this.state.page == 'create-deck'){
      page = <CreateDeck />
    }else if (this.state.page == 'view-deck'){
      page = <ViewDeck />
    }else{
      page = <div>Invalid page</div>
    }

    return (
      <div className="App">
        {page}
      </div>
    )
  }
}

export default App
