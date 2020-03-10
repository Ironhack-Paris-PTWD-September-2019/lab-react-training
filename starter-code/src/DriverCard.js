import React from 'react';
import Rating from './Rating.js'

class DriverCard extends React.Component {
    render(){
        return(
            <div className="DriverCard">
                <div className="DriverCardPart"><img src={this.props.img} alt={this.props.name}></img></div>
                <div className="DriverCardPart">
                    {this.props.name}
                    <Rating>{this.props.rating}</Rating>
                    {this.props.car.model}
                    {this.props.car.licensePlate}
                </div>
  
            </div>
        )
    }
}

export default DriverCard;