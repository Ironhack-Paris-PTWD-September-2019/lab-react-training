import React from 'react'

class CreditCard extends React.Component {
    
    render() {

        let {type , number , expirationMonth , expirationYear , bank , owner , bgColor ,color} = this.props

        return(
            <div className = 'creditCard' style = {{backgroundColor : `${bgColor}` , color : `${color}`}}>
                <h3>{type}</h3>
                <p>.... .... .... {number.slice(12 , 16)}</p>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        )
    }
}

export default CreditCard