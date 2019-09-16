import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import RandomCharacter from './RandomCharacter.js';

class Battle extends Component {
    constructor(props){
        super(props)
        this.state={
            // characters: [],
            character: [],
            characterId: '',
            health: 200
        }
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
       
         
        });
        this.getCharacter()
      }

      async getRandomCharacter(){
        const getRandomItem = iterable => iterable.get([...iterable.keys()][Math.floor(Math.random() * iterable.size)])
      }
    




    // getCharacter(character) {
    //     const characterData = this.state.characters.filter((eachCharacter)=>eachCharacter.id===(this.props.characterId))
    //     this.setState({ character: characterData }, ()=>
    //     console.log('selected', character))
    //   }

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
                {this.state.character.map(character=>{
                    return(
                        <div>
                            <h1>{character.name}</h1>
                            <img src={character.img}/>
                            <h1>{this.state.health}</h1>
                            <div>
                            <h1>{character.moves[0].name}</h1>
                            </div>
                            <div>
                            <h1>{character.moves[1].name}</h1>
                            </div>
                            <div>
                            <h1>{character.moves[2].name}</h1>
                            </div>
                            <div>
                            <h1>{character.moves[3].name}</h1>
                            </div>
                            </div>
                    )

                })}
                
                <h3>Lets Battle!</h3>
                <RandomCharacter
                
                />
              <Link to="/">Home</Link>
            
               
                
            </div>
          </>
        )
    }
}

export default Battle;