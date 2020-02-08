import React, { Component } from 'react';

class LikeButton extends Component {
    color = ['purple','blue','green','yellow','orange','red']
    state = {
        likes : 0,
        bgcolor: ''
    }

    like = () => {
        let index = Math.floor(Math.random()*this.color.length)
        this.setState(
            {
                likes: this.state.likes+1,
                bgcolor: this.color[index]
            } 
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.like} style={{backgroundColor:this.state.bgcolor}}>{this.state.likes} Likes</button>
            </div>
        )
    }
}

export default LikeButton