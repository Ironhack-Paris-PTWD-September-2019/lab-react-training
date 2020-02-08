import React, { Component } from 'react';

const starFull="https://fonts.gstatic.com/s/i/materialicons/star/v5/24px.svg?download=true"
const starEmpty="https://fonts.gstatic.com/s/i/materialicons/star_border/v4/24px.svg?download=true"

const Rating = (props) => {
    return(
        <div>
        {props.children <0.7 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <1.7 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <2.7 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <3.7 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <4.7 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
     </div>
    )

}

export default Rating