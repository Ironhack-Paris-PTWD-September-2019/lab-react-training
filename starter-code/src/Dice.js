import React from 'react'

const image = "../img/dice3.png"

const empty = "../img/dice-empty.png"

const images = ["../img/dice1.png","../img/dice2.png","../img/dice3.png","../img/dice4.png","../img/dice5.png","../img/dice6.png"]

class Dice extends React.Component {

    state = {
        img : image
    }

    launch =()=>{
        this.setState({img : empty})
        const rand =  images[Math.floor(Math.random() * images.length)];
        setTimeout(() => {
            this.setState({img : rand})
        },1000) 
    }

    render() {
        return(
            <div className = "dice">
                <img src={this.state.img} alt="" onClick = {this.launch} style = {{width : '200px'}}/>
            </div>

        )
    }
}

export default Dice