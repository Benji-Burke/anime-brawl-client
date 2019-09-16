import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';



class RandomCharacter extends Component {
    constructor(props){
        super(props);
        this.state={
            characters: [],
            character: {},
            selectedCharacter: null,
            clicked: false,
            randomCharacter: ''
        } 
        this.handleClick=this.handleClick.bind(this)
        this.getData=this.getData.bind(this)
        this.getCharacter=this.getCharacter.bind(this)
    }

    async getData() {
        const response = await axios.get(`http://localhost:3000/characters`);
        const data = response.data;
        console.log(response)
        console.log(data)
        this.setState({
          characters: data,
       
       
         
        });
       
      }

      getCharacter() {
       
        const characterData = this.state.characters.filter((eachCharacter) => eachCharacter.id === (this.props.characterId))
        this.setState({
            character: characterData
        }, () => console.log('character Player', this.state.character))
        
    }
    


    handleClick=()=>{
        this.setState({
            clicked:true,
            selectedCharacter: this.state.characters[Math.floor(Math.random()*this.state.characters.length)]
           
        })
        this.getData()
        this.getCharacter()
    }
    render(){
        return(
            <div className="details">
                <button onClick={this.handleClick}>Random</button>
                {/* {this.state.character.map(character=>{
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

                })} */}
            </div>
        )
    }

}

export default RandomCharacter;