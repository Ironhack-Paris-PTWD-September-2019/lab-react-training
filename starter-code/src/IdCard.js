import React from "react";
import Moment from 'react-moment';

class IdCard extends React.Component {
    render() {
        return(
            <div className="IdCard">
                <div className="person">
                    <div>
                        <img src={this.props.picture} alt="person" className="picture"/>
                    </div>

                    <div>
                        <ul>
                            <li><b>First name:</b> {this.props.firstName}</li>
                            <li><b>Last name:</b> {this.props.lastName}</li>
                            <li><b>Gender:</b> {this.props.gender}</li>
                            <li><b>Height:</b> {this.props.height}</li>
                            <li><b>Birth:</b> <Moment format="ddd MMM DD YYYY">{this.props.birth}</Moment></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default IdCard;