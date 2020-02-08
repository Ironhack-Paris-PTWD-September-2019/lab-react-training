import React, { Component } from 'react';

const starFull="https://fonts.gstatic.com/s/i/materialicons/star/v5/24px.svg?download=true"
const starEmpty="https://fonts.gstatic.com/s/i/materialicons/star_border/v4/24px.svg?download=true"

const Rating = (props) => {
    return(
        <div>
        {props.children <1 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <2 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <3 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <4 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
        {props.children <5 ? <img src={starEmpty} alt=""/> : <img src={starFull} alt=""/>}
     </div>
    )

}

export default Rating