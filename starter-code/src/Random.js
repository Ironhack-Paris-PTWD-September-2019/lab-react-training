import React, { Component } from 'react';

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

class Random extends Component {
    render() {
        
        return (
          <div className="Random">
            <p> Random value between {this.props.min} and {this.props.max} => {randomBetween(Number(this.props.min), Number(this.props.max))} </p>
          </div>
        );
      }
    }



export default Random;