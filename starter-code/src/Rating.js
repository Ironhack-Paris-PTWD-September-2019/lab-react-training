import React, { Component } from "react";
import "./index.css";


class Rating extends Component {

    render() {
        let numberStar = Math.round(this.props.children);
        console.log(numberStar);
        let imgStar = "";
        if (numberStar === 0) {
           imgStar = "../public/img/star/zero.PNG"; 
        }
        if (numberStar === 1) {
           imgStar = "../public/img/star/one-star.PNG"; 
        }
        if (numberStar === 2) {
           imgStar = "../public/img/star/two-stars.PNG"; 
        }
        if (numberStar === 3) {
           imgStar = "../public/img/star/three-stars.PNG"; 
        }
        if (numberStar === 4) {
           imgStar = "../public/img/star/four-stars.PNG"; 
        }
        if (numberStar === 5) {
           imgStar = "../public/img/star/five-stars.PNG"; 
        }
        return (
            <div className="Rating">
                <div className="star">
                    <img src={imgStar} alt="star-logo" />
                </div>
            </div>
        );
    }
}

export default Rating;