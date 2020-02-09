import React, { Component } from "react";
import "./index.css";



class Random extends Component {

    render() {
        let aleatoire = (Math.floor(Math.random() * this.props.max))+1;
        console.log(aleatoire);

        return (
            <div className="Random">
                <h3 className="randomBox"><span>Random value between {this.props.min} and {this.props.max} => {aleatoire}</span></h3>
            </div>


        );
    }
}

export default Random;