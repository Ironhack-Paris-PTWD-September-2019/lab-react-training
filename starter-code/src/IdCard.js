import React from 'react'
import './IdCard.css'
import moment from 'moment'

class IdCard extends React.Component {
    render() {
    
        let {picture , firstName , lastName , gender , height , birth} = this.props;
        return(
            <div className='card'>
                <div className = 'pic'>
                    <img src = {picture} alt ='avatar'/>
                </div>
                <div className = "text">
                    <p><strong>First Name :</strong> {firstName}</p>
                    <p><strong>Last Name :</strong> {lastName}</p>
                    <p><strong>Gender :</strong> {gender}</p>
                    <p><strong>Height :</strong> {height}</p>
                    <p><strong>Birth :</strong>{moment(birth).format("MMM Do YY")}</p>
                </div>
            </div>
        )
    }
}

export default IdCard