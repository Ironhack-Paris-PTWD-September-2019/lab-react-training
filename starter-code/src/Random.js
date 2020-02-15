import React from 'react'


class Random extends React.Component {
    
    render() {
        let {min , max} = this.props;
        
        let random = Math.floor(Math.random() * (max - min) + min)

        return(
            <p>Random Value between {min} and {max} => {random} </p>
        )
    }
}

export default Random