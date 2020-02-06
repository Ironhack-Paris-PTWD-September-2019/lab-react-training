import React, { Component } from 'react';


class BoxColor extends Component {
    render() {
      
        var r = this.props.r;
        var g = this.props.g;
        var b = this.props.b;
        var rgb = `(${r},${g},${b})`;

        const divStyle = {
            backgroundColor: `rgb${rgb}`,
            width:'100%',
            margin:'3%'
          };
          

      return (
        <div className="BoxColor">
            <div style={divStyle}>rgb{rgb}</div>
        </div>
      );
    }
  }



export default BoxColor;