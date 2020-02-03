import React, { Component } from "react";
import "./index.css";


class CreditCard extends Component {

    render() {

        let creditCardStyle = {
            background: `${this.props.bgColor}`,
            color: `${this.props.color}`
        }

        let imgUrl = "";
        let description = "";
        if (this.props.type === "Visa") {
           imgUrl = "https://prediggo.com/wp-content/uploads/2019/07/VISA-logo.png";
           description = "logo-visa";
        }
        if (this.props.type === "Master Card") {
            imgUrl = "https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/MasterCard-Logo-1-1024x768.png";
            description = "logo-masterCard";
        }

        let code1 = "";
        let code2 ="";
        let code3 = "";
        let code4 = "";

        for (let i=0 ; i <= this.props.number.length ; i++) {
            if ( i>= 0 && i <4) {
                code1 += this.props.number[i];
            }
            if ( i>= 4 && i <8) {
                code2 += this.props.number[i]
            }
            if ( i>= 8 && i <12) {
                code3 += this.props.number[i]
            }
            if ( i>= 12 && i <16) {
                code4 += this.props.number[i]
            }
        }

        // let newCode = code1 + " " + code2 + " " + code3 + " " + code4;
        let hiddenCode = "●●●●" + " " + "●●●●" + " " + "●●●●" + " " + code4;


        return (
            <div className="CreditCard" style={creditCardStyle}>
                <div className="logo">
                    <img src={imgUrl} alt={description}/>
                </div>
                <h3 className="number"><span>{hiddenCode}</span></h3>
                <div className="dateBank">
                    <h3><span>Expires {this.props.expirationMonth}/{this.props.expirationYear}</span></h3>
                    <h3><span>{this.props.bank}</span></h3>
                </div>
                <h3 className="owner"><span>{this.props.owner}</span></h3>
            </div>
        );
    }
}

export default CreditCard;