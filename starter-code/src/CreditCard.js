import React from 'react';

class CreditCard extends React.Component{
    render(){
        var divStyle = {
            backgroundColor:this.props.bgColor,
            color:this.props.color
        }

        var cardLink = '';

        if (this.props.type==="Visa") {
            cardLink='./img/visa.png'
        } else {
            cardLink='./img/master-card.svg '
        }

        var fourDigits = this.props.number.slice(-4,16);
        console.log('4 digits',fourDigits)

        return(
            <div className="CreditCard" style={divStyle}>
                <div className="card-logo"><img src={cardLink} alt={this.props.type}/> </div>
                <div className="card-number">
                    <div className="four-dots">
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                    </div>
                    <div className="four-dots">
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                    </div>
                    <div className="four-dots">
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                        <span className="dot" style={{backgroundColor:this.props.color}}></span>
                    </div>
                    <div>{fourDigits}</div>
                </div>
                <div>Expires {this.props.expirationMonth}/{this.props.expirationYear} {this.props.bank}</div>
                <div>{this.props.owner}</div>
            </div>
        )
    }
}

export default CreditCard;