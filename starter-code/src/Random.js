import React from 'react';

class Random extends React.Component {
    render(){
        var randomValue=Math.floor(Math.random()*(this.props.max-this.props.min)+1);
        return(
            <div>
                Random value between {this.props.min} and {this.props.max} => {randomValue};
            </div>
        )
    }

}

export default Random;