import React from 'react'
import './BoxColor.css'

class BoxColor extends React.Component {
    
    render() {

        let {r , g , b} = this.props

        return(
            <div className = 'box' style = {{backgroundColor : `rgb(${r} , ${g} , ${b})`}}>
                <p>rgb({r} , {g} , {b})</p>
            </div>
        )
    }
}

export default BoxColor