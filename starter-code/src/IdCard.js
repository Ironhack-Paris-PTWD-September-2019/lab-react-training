import React, { Component } from "react";
import './index.css';
import moment from 'moment';

class IdCard extends Component {

    render(){

        let taille = this.props.height/100 + "m";
        
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
                    <h3 className="birth">Birth: <span>{this.props.birth}</span></h3>
                </div> 
            </div>
        );
    }
}

export default IdCard;