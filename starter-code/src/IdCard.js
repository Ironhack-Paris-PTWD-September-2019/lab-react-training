import React, { Component } from 'react';


class IdCard extends Component {
    render() {
      
      return (
        <div className="IdCard">
          <div className="image">
              <img src={this.props.picture} alt=""/>
          </div>
          <div className="info">
              <div>First name:{this.props.firstName}</div>
              <div>Last name:{this.props.lastName}</div>
              <div>Gender:{this.props.gender}</div>
              <div>Height:{this.props.height}</div>
              <div>Birth:{this.props.birth.toUTCString()}</div>
          </div>
        </div>
      );
    }
  }



export default IdCard;