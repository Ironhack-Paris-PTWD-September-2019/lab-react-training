import React from 'react';

class Rating extends React.Component {


    render(){      
        var arr=[]
        var arrEmptyStars=[]
        for (let i=1;i<=Math.round(this.props.children);i++) {
            arr.push(i) 
        }
        for (let i=1;i<=(5-Math.round(this.props.children));i++) {
            arrEmptyStars.push(i) 
        }
        return(
        <div>
            {arr.map((el,index) => {
                return(
                    <span key={index}>★</span>
                )
            })}
            {arrEmptyStars.map((el,index) => {
                return(
                    <span key={index}>☆</span>
                )
            })}
            
        </div>
        )
    }

}


export default Rating;