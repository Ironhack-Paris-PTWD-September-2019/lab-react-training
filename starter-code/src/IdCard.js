import React, { Component } from 'react'


class IdCard extends Component {
    render () {
        return(
        <div className="idCard">
            <div className="avatar">
                <img src={this.props.avatar} alt="avatar"/>
            </div>
            <div className="details">
                <p><span>First name : </span>{this.props.firstName}</p>
                <p><span>Last name  : </span>{this.props.lastName}</p>
                <p><span>Gender  : </span>{this.props.gender}</p>
                <p><span>Height  : </span>{this.props.height}</p>
                <p><span>Birth  : </span>{this.props.birth}</p>
            </div>
        
        
        </div>
        );
    }
}

export default IdCard;