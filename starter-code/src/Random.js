import React, {Component} from "react"

function randomBetween(max, min){
    return Math.floor(Math.random()*(max-min+1) + min);
 }




class Random extends Component {
  
    render () {
      
        return (
            <div> 
                <p> Random value between {this.props.min} and {this.props.max} => {randomBetween(this.props.min),(this.props.max)} </p>
            </div>
        );
    }
}

export default Random;