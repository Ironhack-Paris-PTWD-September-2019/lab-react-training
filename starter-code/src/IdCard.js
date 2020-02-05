// Create a IdCard component with 6 props:

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

import React, { Component } from "react";

class IdCard extends Component {
    render() {
    let date = this.props.birth
    let birthday = date.getDate();
        let birthmonth = date.getMonth();
        let birthyear= date.getFullYear(); 
      return (
      <div className="ID">
         <div className="avatar">
            <img src={this.props.picture} alt=""/>
         </div>
         <div className="info">
            <p><b>Last name: </b>{this.props.lastName}</p>
            <p><b>First name: </b>{this.props.firstName}</p>
            <p><b>Gender: </b>{this.props.gender}</p>
            <p><b>Height: </b>{this.props.height}</p>
            <p><b>Birth: </b>{birthday} / { birthmonth} / { birthyear}</p>
         </div>
      </div>
      );
    }
  }

  export default IdCard;