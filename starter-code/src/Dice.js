import React from 'react';

class Dice extends React.Component {
    state = {
        dice: "/img/dice6.png"
    }

    emptyDice = () => {
        this.setState({
            dice:"/img/dice-empty.png"
        })
    }

    rollDice = () => {
        var diceValues=[1,2,3,4,5,6]
        var diceRandomIndex=Math.floor(Math.random()*diceValues.length)
        var diceRandomValue=diceValues[diceRandomIndex];
        this.setState({
            dice:`/img/dice${diceRandomValue}.png`
        })
    }

    render(){
        return(
            <div className="Dice">
                <img src={this.state.dice} alt="dice" onClick={()=>{
                    setTimeout(this.emptyDice,500)
                    setTimeout(this.rollDice,1000)
                    }}></img>
            </div>
        )
    }
}

export default Dice;