import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Battle from './Battle'

import axios from 'axios'

let baseURL = process.env.REACT_APP_BASEURL
if(process.env.NODE_ENV==='development'){
  baseURL = 'http://localhost:3000'
} else{
  baseURL='https://anime-app-api.herokuapp.com'
}





class Cards extends Component {
  constructor(props) {
    super(props);
    this.M = window.M; /*"window.M" will make sure that you have access to the M included in the earlier materialize cdn script tag, so that you don't get errors like "M is undefined" */

    this.state = {
      characters: [],
      character: {},
      characterId: ''
    
    };
    this.getData = this.getData.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    // this.getMoveSet = this.getMoveSet.bind(this);
    // this.getMove = this.getMove.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // this.openModalHandler = this.openModalHandler.bind(this);
    // this.getSelectedCharacter=this.getSelectedCharacter.bind(this)
  }

  async getData() {
    const response = await axios.get(`${baseURL}/characters`);
    const data = response.data;
    // console.log(response)
    // console.log(data)
    this.setState({
      characters: data,
    });
  }

  async componentDidMount() {
    await this.getData();
    // await this.getMoveSet();
    // await this.getCharacter();
    // console.log('character: ', this.state.characters);
 
  }

  getCharacter(character) {
    this.setState({ character: character });
    console.log('clicked', character)
  }

  handleClick(id){
     this.setState({
      characterId: id,
      
    })
    console.log('h', this.state.characterId)
  }

  render() {
    return (
  
      

      <div className='row'>
      {this.state.characters.map(character => {
        return (
          <div className='col s4 m4 l2'>

              <div
                key={character._id}
               
                className='character'
                >
            <div className='card'>
                <div className='card-image waves-effect waves-block waves-light'>
                  <img className='activator' src={character.img} />
                </div>
                <div className='card-content'>
                  <span className='card-title activator'>
                    {character.name}
                    <i className='material-icons right'></i>
                  </span>
                 
                 <button
                 key={character.id}
                 ><div ><Link to={`/battle/${character.id}`}
                 onClick={(id)=>{
                   this.props.handleClick(character.id)
                 }}
                 >Select</Link></div></button>
                </div>
                <div className='card-reveal'>
                  <span className='card-title grey-text text-darken-4 activator'>
                    {character.name}
                    <i className='material-icons right'>x</i>
                  </span>
                  <p>attack: {character.attack}</p>
                  <p>defense: {character.defense}</p>
                  <p>speed: {character.speed}</p>
                  <br/>
                  {/* moves */}
                  <p>moves:</p>
                  <br/>
                  <p>{character.moves[0].name}</p>
                  <p>{character.moves[1].name}</p>
                 <p>{character.moves[2].name}</p>
                 <p> {character.moves[3].name}</p>
                  {/* {this.state.moves.map(moves =>{
                    return(
                      <p
                      key={character._id}
                      >moves: {character.moves.name}</p>
                      
                      
                      
                      ) })

                    } */}
                
                </div>
              </div>
            </div>

          </div>
        );
      })}

   

                   
    </div>
        
    );
  }
}

export default Cards;
