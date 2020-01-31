import React, { Component } from "react";
import './index.css';

class IdCard extends Component {

    render(){

        let taille = this.props.height/100 + "m";
        // let anniv = new Date(this.props.birth);
        
        return (
            <div className="IdCard">
                <div className="imgId">
                    <img className="picture" src={this.props.picture} alt="imgPerso"></img> 
                </div>
                <div className="infoId">
                    <h3 className="firstName">First name: <span>{this.props.firstName}</span></h3>
                    <h3 className="lastName">Last name: <span>{this.props.lastName}</span></h3>
                    <h3 className="gender">Gender: <span>{this.props.gender}</span></h3>
                    <h3 className="height">Height: <span>{taille}</span></h3>

                    <label >Birth: </label>
                    <input type="date" value={this.props.birth} default ></input>
                </div> 
            </div>
        );
    }
}

export default IdCard;