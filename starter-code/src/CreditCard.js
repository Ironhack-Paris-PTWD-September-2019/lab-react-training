// Create a CreditCard component that displays a square with a background color based on props. For this. You will need a styled component.

// It takes 8 props:

// type: A string that can be "Visa" or "Master Card"
// number: A string that is number of the credit card. You will only display the 4 last digits for security reasons wink
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string the reprensents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card
// Take your time to do as close to the output. You probably have to use flexbox.

// Example
//   type="Master Card"
//   number="0123456789010995"
//   expirationMonth={3}
//   expirationYear={2021}
//   bank="N26"
//   owner="Maxence Bouret"
//   bgColor="#eeeeee"
//   color="#222222" 

import React, { Component } from "react";

class CreditCard extends Component {
    render() {
        var cardlogo = ""

        if (this.props.type === "Visa"){
            cardlogo = "../img/visa.png"
        } else if (this.props.type === "Master Card"){
            cardlogo = "../img/master-card.svg"
        } 

        var cardnum = "**** **** ***** " + (Number(this.props.number).toString(10)).substring(11);
      return (
      <div className="bankcard" style={{ backgroundColor: `${this.props.bgColor}`, color: `${this.props.color}`}}>
        <div className="right">
            <img src={cardlogo} alt="" className="logo"/>
         </div>
         <div className="center">
             <p>{cardnum}</p>
         </div>
         <div className="info">
            <div className="row">
                <p>Expires {this.props.expirationMonth} / {this.props.expirationYear}</p>
                <p>{this.props.bank}</p>
             </div>
            <div className="row">
                <p>{this.props.owner}</p>
            </div>
         </div>
      </div>
      );
    }
  }

  export default CreditCard;