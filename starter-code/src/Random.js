import React from 'react';

class Random extends React.Component {
    render() {
        const min=this.props.min;
        const max=this.props.max;

        const nbr = Math.floor(Math.random()*(max - min) + min);

        return(
            <div className="Random">
                <p>
                    Random value between {min} and {max} => {nbr}
                </p>
            </div>
        );
    }
};

export default Random;