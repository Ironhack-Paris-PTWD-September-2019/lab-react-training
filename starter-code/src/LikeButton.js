import React from 'react';

class LikeButton extends React.Component {
    state = {
        nbOfLikes:0
    }
    increaseLike = () => {
        var nbOfLikes2=this.state.nbOfLikes
        this.setState({
            nbOfLikes:nbOfLikes2+=1
        })
    }
    render(){
        const color=['purple','blue','green','yellow','orange','red']
        var colorIndex=this.state.nbOfLikes % color.length
        return(
            <button onClick={this.increaseLike} style={{backgroundColor:color[colorIndex]}}>
                {this.state.nbOfLikes} Likes
            </button>
        )
    }
}

export default LikeButton;