import React from 'react';
import axios from 'axios';

class Attack extends React.Component {
    constructor(){
        super();
        this.state={
            attackButton: false,
            moves: {},
            defendButton: false,
            health: 200
        };
    }

    componentDidMount(){
        this.getMoves();
    }
attactkBtn(){
    console.log('Clicked the attack button')
    this.setState({
        attackButton: true
    })
}

defendBtn(){
    console.log('Clicked the defend button')
    this.setState({
        defendButton: true
    })
}

showMoveData(){
    return (
        <div>
            <h5 className="moves">{this.props.moves[0].name}</h5>
        </div>
    )
}
       
}

export default Attack;