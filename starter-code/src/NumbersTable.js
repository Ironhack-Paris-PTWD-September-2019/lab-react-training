import React from 'react'

class NumbersTable extends React.Component {

    state = {
        table : [1]
    }

    deployLimits =(limit) =>{
        const tableCopy = [...this.state.table]
        for (let index = 0; index < limit -1; index++) {
            tableCopy.push(index)   
        }
        return tableCopy
    }
    
    
    render() {
        let limit = this.props.limit
        return(
            <div className = 'numbersTable'>
                {this.deployLimits(limit).map((el , index) =>{
                    return <div style={{display : 'flex'}}>{index + 1}</div>
                })}
            </div>
        )
    }
}

export default NumbersTable