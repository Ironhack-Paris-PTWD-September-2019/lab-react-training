import React, { Component } from "react";
import "./index.css";


class CreditCard extends Component {

    render() {

        let creditCardStyle = {
            background: `${this.props.bgColor}`,
            color: `${this.props.color}`
        }

        let imgUrl = "";
        if (this.props.type === "Visa") {
           imgUrl = "../public/img/visa.png";
        }
        if (this.props.type === "Master Card") {
            imgUrl = "../public/img/master-card.svg";
        }

        return (
            <div className="CreditCard" style={creditCardStyle}>
                <div className="logo">
                    <img className="pictureCreditCard" src={imgUrl} alt="logo"></img>
                </div>
                <h3>{this.props.number}</h3>
                <div className="dateBank">
                    <h3>Expires {this.props.expirationMonth}/{this.props.expirationYear}</h3>
                    <h3>{this.props.bank}</h3>
                </div>
                <h3>{this.props.owner}</h3>
            </div>
        );
    }
}

export default CreditCard;