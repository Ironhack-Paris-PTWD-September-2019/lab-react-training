// Create a Random component with 2 props:

// min: A number
// max: A number
// Example

// <Random min={1} max={6}/>
// <Random min={1} max={100}/>

import React, { Component } from "react";

class Random extends Component {
    render() {
        var randomNumber =
        Math.round(Math.random () * (this.props.maxNumber - this.props.minNumber + 1) + this.props.minNumber);

      return (
      <div className="ID">
         <div className="info">
            <p>Random value between {this.props.minNumber} and {this.props.maxNumber} : {randomNumber} </p>
         </div>
      </div>
      );
    }
  }

  export default Random;