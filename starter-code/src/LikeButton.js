import React from 'react'
import './likebutton.css'

class LikeButton extends React.Component {

    state = {
        ClickCount : 0
    }

    clicker = () => {
        this.setState({
            ClickCount : this.state.ClickCount + 1
        })
    }
    
    render() {

        return(
            <div className = 'likeButton'>
                <button onClick = {this.clicker}>{this.state.ClickCount}</button>     
            </div>
        )
    }
}

export default LikeButton