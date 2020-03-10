import React from "react";


class IdCard extends React.Component {
    render(){
        return(
            <div className="IdCard">

                <div className="IdCard-part">
                    <img src={this.props.picture} alt={this.props.alt}/>
                </div>

                <div className="IdCard-part">
                    <div><strong>Last name:</strong> {this.props.lastName}</div>
                    <div><strong>First name:</strong> {this.props.firstName}</div>
                    <div><strong>Gender:</strong> {this.props.gender}</div>
                    <div><strong>Height: </strong> {this.props.height}</div>
                    <div><strong>Birth: </strong>{this.props.birth}</div>
                </div> 

            </div>
        )
    }
}

export default IdCard;