import React from 'react'
import './rating.css'
 
const whiteStar = '../img/whiteStar.png';
const blackStar = '../img/blackStar.png';


class Rating extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {note: Number(props.children)};
        console.log('state=', this.state);
    }

    rate =()=> {
        if(this.state.note > 4.5) {
            return (
            <div>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            </div>
            )
        }
        if(this.state.note > 3.5) {
            return (
            <div>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            </div>
            )
        }
        if(this.state.note > 2.5) {
            return (
            <div>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            </div>
            )
        }
        if(this.state.note >= 1.5) {
            return (
            <div>
            <img src = {blackStar} alt =''/>
            <img src = {blackStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            </div>
            )
        }
        if(this.state.note > 0.5) {
            return (
            <div>
            <img src = {blackStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            </div>
            )
        }
        if(this.state.note < 0.5) {
            return (
            <div>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            <img src = {whiteStar} alt =''/>
            </div>
            )
        }
        
    }
    render() {
        return(
            <div className = "rating">
                {this.rate()}
            </div>
        )
    }
}

export default Rating