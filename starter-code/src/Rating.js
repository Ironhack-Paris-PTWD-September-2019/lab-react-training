import React from 'react';

class Rating extends React.Component {
    render() {

        return(
            <div className="Rating">
                {0 < Number(this.props.children) && Number(this.props.children) <= 1.5 && <p>★☆☆☆☆</p>}
                {1.5 < Number(this.props.children) && Number(this.props.children) <= 2.5 && <p>★★☆☆☆</p>}
                {2.5 < Number(this.props.children) && Number(this.props.children) <= 3.5 && <p>★★★☆☆</p>}
                {3.5 < Number(this.props.children) && Number(this.props.children) <= 4.5 && <p>★★★★☆</p>}
                {4.5 < Number(this.props.children) && Number(this.props.children) <= 5 && <p>★★★★★</p>}
            </div>
        );
    }
};

export default Rating;