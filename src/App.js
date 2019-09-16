import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import PlayerSelect from './components/PlayerSelect';
import Cards from './components/Cards.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Battle from './components/Battle';

class App extends Component {
constructor(props){
  super(props)
  this.state={
    characters: [],
    characterId: ""
  }
  this.handleClick = this.handleClick.bind(this)
}
async handleClick(id){
  await this.setState({
    characterId: id
  })
  console.log('hello',this.state.characterId)
}
  

  render() {
    return (
      <div className='App'>
        <Router>
     <div>
<Header/>
<PlayerSelect/>

     </div>
     
      {/* <Link to ="/battle">Battle</Link> */}
    
         <Route path="/" exact Component ={Header}/>    
         <Route path="/" exact  Component ={PlayerSelect}/>    
          {/* <Route exact path="/" component={Cards}/> */}
          <Route path="/" exact render={props => (
         
        
                        <Cards {...props} handleClick = {this.handleClick}/>
                    )}
                        />
          {/* <Route exact path={`/battle/${this.state.characterId}`} component={Battle} /> */}
          <Route path={`/battle/${this.state.characterId}`}
                    render={props => (
                        <Battle characterId={this.state.characterId}
                        {...props}
                        />
                    )}/>
                  

        </Router>
      </div>
    );
  }
}

export default App;
