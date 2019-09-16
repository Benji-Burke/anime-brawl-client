import React, { Component } from 'react';
import axios from 'axios'

class RandomCharacterFunction extends Component {
    constructor(props){
        super(props)
        this.state={
            characters: [],
            randomCharacter: ''
        }
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
    return(){
        render(

        )
    }

}

export default RandomCharacterFunction;