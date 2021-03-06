import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import RandomCharacter from './RandomCharacter.js';
import Attack from './Attack.js'

class Battle extends Component {
    constructor(props){
        super(props)
        this.state={
            // characters: [],
            character: [],
            characterId: '',
            health: 200, 
            display: 'hideMoves', 
            power: '',
            showCurrentHealth: true,
            move: '',
            attackId: [],
            userHealth: 200,
            computerHealth: 200
          

            
        }
        this.decreaseHealth = this.decreaseHealth.bind(this)

    }
    componentDidMount(){
        this.getData()
    }

    async getData() {
        const response = await axios.get(`http://localhost:3000/characters`);
        const data = response.data;
        // console.log(response)
        // console.log(data)
        this.setState({
          characters: data,
          power: data
       
         
        });
        // this.setState(prevState=>({health: prevState.health - power}))
        this.getCharacter()
      }


    decreaseHealth=()=>{
        let computerHealth = this.state.health

        computerHealth=computerHealth-this.state.power
        this.setState({
            computerHealth: computerHealth
        })
    }

   




   

      getCharacter() {
       
        const characterData = this.state.characters.filter((eachCharacter) => eachCharacter.id === (this.props.characterId))
        this.setState({
            character: characterData
        }, () => console.log('character Player', this.state.character))
        
    }

    
   
   

    render(){
        return(
            
            <>
            <div className="details">
            <h3>Lets Battle!</h3>
                <div className="row">

                {this.state.character.map(character=>{
                    return(
                        <div className="col s6">
                            <h1>{character.name}</h1>
                            <img src={character.img}/>
                            <h1>{this.state.health}</h1>

                            <div className="attack">
                 <h1> {this.state.opponentHealth}</h1>
               <button className="attackBtn" onClick={this.state.decreaseHealth}>attack</button>
             </div>
                            <button>Defend</button>
                            <div className="movesContainer card-panel blue">
                            <div onClick={this.decreaseHealth} >
                            <h1>{character.moves[0].name}</h1>
                            </div>
                            <div onClick={this.decreaseHealth}>
                            <h1>{character.moves[1].name}</h1>
                            </div>
                            <div onClick={this.decreaseHealth}>
                            <h1>{character.moves[2].name}</h1>
                            </div>
                            <div onClick={this.decreaseHealth}>
                            <h1>{character.moves[3].name}</h1>
                            </div>
                            </div>
                            </div>
                    )
                    
                })}
                
                <div className="col s6">
                <RandomCharacter
                
                />

                </div>
                </div>
              <Link to="/">Home</Link>
                {/* <Attack/> */}
            
               
                
            </div>
          </>
        )
    }
}

export default Battle;