import React from "react";
import "./index.css";
import Rating from './Rating';



class DriverCard extends React.Component {
    render() {
        return (
            <div className="DriverCard">
                <div className="imgDriverCard">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="infoDriverCard">
                    <h1>{this.props.name}</h1>
                    <Rating className="white">{this.props.rating}</Rating>
                    <h2><span>{this.props.car.model} - {this.props.car.licensePlate}</span></h2>
                </div>
            </div>
        );
    }
}

export default DriverCard;