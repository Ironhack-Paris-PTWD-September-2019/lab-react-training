import React from 'react'
import './driver.css'

import Rating from './Rating'

class DriverCard extends React.Component {
    
    render() {

        let {name , img ,rating} = this.props

        let {model , licensePlate} =  this.props.car

        return(
            <div className = 'driverCard'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <img src={img} alt="" className = 'driver'/> 
                <p>{model} - {licensePlate.toUpperCase()}</p>          
            </div>
        )
    }
}

export default DriverCard