import React from "react";

const FacebookCard =(props) => {

    var type = "teacher"
    if (props.isStudent===true) {type="student"}
    console.log('props.clickToChangeBackground',props.clickToChangeBackground)
    return(
        <div className="IdCard" style={{backgroundColor:props.clickToChangeBackground}}>

            <div className="IdCard-part-one">
                <img src={props.img} alt={props.alt}/>
            </div>

            <div className="IdCard-part">
                <div><strong>First name:</strong> {props.firstName}</div>
                <div><strong>Last name:</strong> {props.lastName}</div>
                <div><strong>Country:</strong> {props.country}</div>
                <div><strong>Type: </strong> {type}</div>
            </div> 

        </div>
    )
    
}

export default FacebookCard;