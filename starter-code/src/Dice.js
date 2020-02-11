import React from 'react';

class Dice extends React.Component {
    
    randomIndex = Math.round((Math.random()+1)*3);

    state = {
        diceFace: "dice" + this.randomIndex
    };

    rollDice = () => {
        const randomIndex = Math.round((Math.random()+1)*3);
 
        setTimeout(() => {this.setState({
            diceFace: "dice-empty"
        });}, 0.1);

        setTimeout(() => {this.setState({
            diceFace: "dice" + randomIndex
        });}, 1000);
    };

    render() {
        return(
            <img style={{width: "160px"}} alt="dice" src={"/img/" + this.state.diceFace + ".png"} onClick={(event) => this.rollDice()}/>
        );
    }
}

export default Dice;