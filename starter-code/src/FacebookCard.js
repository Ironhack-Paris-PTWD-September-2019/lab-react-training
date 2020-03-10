import React from "react";

const FacebookCard =(props) => {

    var type = "teacher"
    if (props.isStudent===true) {type="student"}
 
    return(
        <div className="IdCard" style={{backgroundColor:props.blue}}>

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