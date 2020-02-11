import React from 'react';

class CreditCard extends React.Component {
    render() {

        return(
            <div className="CreditCard">
                <div style={{background: this.props.bgColor, color: this.props.color}} className="card">
                    <p style={{textAlign: "center"}}>
                        <span className="cardNumber">**** **** **** {this.props.number[12]} {this.props.number[13]} {this.props.number[14]} {this.props.number[15]}</span>
                    </p>
                    <p>
                            Expires {this.props.expirationMonth}/{this.props.expirationYear} {this.props.bank}
                    </p>
                    <p>
                        {this.props.owner}
                    </p>
                </div>
            </div>
        );
    }
}

export default CreditCard;