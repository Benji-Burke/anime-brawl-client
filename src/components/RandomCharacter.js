import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';

let baseURL = process.env.REACT_APP_BASEURL
if(process.env.NODE_ENV==='development'){
  baseURL = 'http://localhost:3000'
} else{
  baseURL='https://anime-app-api.herokuapp.com'
}


class RandomCharacter extends Component {
    constructor(props){
        super(props);
        this.state={
            characters: [],
            character: [],
            selectedCharacter: null,
            clicked: false,
            randomCharacter: '',
            health: 200,

        } 
        this.handleClick=this.handleClick.bind(this)
        this.getData=this.getData.bind(this)
        // this.getCharacter=this.getCharacter.bind(this)
    }

    async getData() {
        const response = await axios.get(`${baseURL}/characters`);
        const data = response.data;
        console.log(data)
        this.setState({
          characters: data,
       
       
         
        });
       
      }

    handleClick= async ()=>{
        await this.getData()
        console.log('random character: ',this.state.characters[Math.floor(Math.random()*this.state.characters.length)])
        this.setState({
            clicked:true,
            character: this.state.characters[Math.floor(Math.random()*this.state.characters.length)],
            
           
        })
        
    }
    render(){
        return(
            <div className="details">
                <button onClick={this.handleClick}>Random</button>


                <h1>{this.state.character.name}</h1>
                <img src={this.state.character.img}></img>
                <h1> {this.state.character.health}</h1>

                
               <h1></h1>
            </div>
        )
    }

}

export default RandomCharacter;