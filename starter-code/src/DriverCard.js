/* <DriverCard 
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} /> */

import React, { Component } from 'react';
import Rating from './Rating.js'

const DriverCard = (props) => {
    return(
        <div className="ID2">
         <div className="avatar">
            <img className="imgID" src={props.img} alt=""/>
         </div>

         <div className="info">
         <p style={{fontSize:'200%'}}><strong>{props.name}</strong></p>
         <div style={{filter: 'invert(1)'}}>
         <Rating >{props.rating}</Rating>
         </div>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>
         </div>
      </div>
    )

}

export default DriverCard