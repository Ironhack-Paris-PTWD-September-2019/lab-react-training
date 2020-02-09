import React, { Component } from "react";
import "./index.css";


class BoxColor extends Component {

    render() {

        let BoxStyle = {
            background: `rgb(${this.props.r},${this.props.g},${this.props.b})` 
        }
        console.log(BoxStyle);
  

        return (
            <div className="BoxColor" style={BoxStyle} >
                <h3 id="rgbBox"><span>rgb({this.props.r},{this.props.g},{this.props.b})</span></h3>
                <h3 id="hexBox"><span>#{this.props.hex} </span></h3>
            </div>


        );
    }
}

export default BoxColor;