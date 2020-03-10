import React from 'react';
class NumbersTable extends React.Component {
    state = {
        numbers:Array.from({length:this.props.limit}, (_,index) => index + 1)
    }
    render() {
        return(
            <div className="NumbersTable">
                {this.state.numbers.map((number,index) => {
                    var color = 'white'
                    if (number%2===0) {
                        color='red'
                    } 
                    return(
                        <div key={index} className="NumbersSquare" style={{backgroundColor:color}}>
                            {number}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default NumbersTable;