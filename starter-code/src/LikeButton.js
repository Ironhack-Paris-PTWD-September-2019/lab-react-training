import React from 'react';

class LikeButton extends React.Component {
    state = {
        likes: 0,
        color: 'purple'
    };

    addLike = () => {
        const likesCount = this.state.likes + 1;
        const colors = ['purple','blue','green','yellow','orange','red'];
        // filtrer colors pour sortir this.state.color
        const test = colors.filter(col => col === this.state.color);
        console.log("result of filter : " + test);

        var randomIndex = Math.floor(Math.random()*5);
        var randomColor = colors[randomIndex];
        console.log(randomColor);
        
        // pour éviter que la même couleur s'affiche deux fois de suite :
        if (randomColor === this.state.color) {
            const colorsCopy = [...colors];
            colorsCopy.slice(randomIndex,randomIndex+1);
            randomIndex = Math.floor(Math.random()*colorsCopy.length);
            randomColor = colors[randomIndex];
            console.log("modified: " + randomColor);
            colors.push(randomColor);
        }
        
        this.setState({
                likes: likesCount,
                color: randomColor
        })
        
    };

    render() {
        return(
            <button style={{background: this.state.color}} onClick={(event) => this.addLike()}>
                {this.state.likes} likes
            </button>
        );
    }
}

export default LikeButton;