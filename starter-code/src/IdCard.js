import React from "react";

class IdCard extends React.Component {
    render(){
        return(
            <div className="IdCard">

                <div className="IdCard-part">
                    <img src={this.props.picture} alt={this.props.alt}/>
                </div>

                <div className="IdCard-part">
                    <div>last name:{this.props.lastName}</div>
                    <div>first name:{this.props.firstName}</div>
                    <div>gender:{this.props.gender}</div>
                    <div>height:{this.props.height}</div>
                    <div>birth:{this.props.birth}</div>
                </div> 

            </div>
        )
    }
}

export default IdCard;