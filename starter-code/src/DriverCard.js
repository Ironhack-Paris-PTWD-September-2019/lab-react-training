import React from 'react';
import Rating from './Rating.js';

class DriverCard extends React.Component {
    render() {

        return(
            <div className="DriverCard">
                <div className="drivercard">
                    <div>
                        <div alt="driver" className="driverimg" style={{background:"url(" + this.props.img + ")", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                    </div>

                    <div style={{textAlign: "center", lineHeight: "10px"}}>
                        <span className="cardname">{this.props.name}
                        <Rating>{this.props.rating}</Rating></span>
                        {this.props.car.model} - {this.props.car.licensePlate}
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverCard;