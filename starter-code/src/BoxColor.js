// Create a BoxColor component that displays a rectangle with a background color based on props. For this, you will need a inline style (documentation).

// It takes 3 props:

// r: A number between 0 and 255 representing the amount of red
// g: A number between 0 and 255 representing the amount of green
// b: A number between 0 and 255 representing the amount of blue
// Example

// <BoxColor r={255} g={0} b={0} />
// <BoxColor r={128} g={255} b={0} />

import React, { Component } from "react";

class BoxColor extends Component {
    render() {
        var color = `rgb(${this.props.r},${this.props.g},${this.props.b})`
        var colorhex = function (rgb) { 
            var hex = Number(rgb).toString(16);
            if (hex.length < 2) {
                 hex = "0" + hex;
            }
            return hex;
          };
          var fullColorHex = function(r,g,b) {   
            var red = colorhex(r);
            var green = colorhex(g);
            var blue = colorhex(b);
            return red+green+blue;
          };
      return (
      <div className="ID" style={{ backgroundColor: `${color}` }}>
         <div className="info">
            <p><strong> {color}</strong></p>
            <p>#{fullColorHex(this.props.r,this.props.g,this.props.b)}</p>
         </div>
      </div>
      );
    }
  }

  export default BoxColor;