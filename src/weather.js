import React, { Component } from 'react'

export class weather extends Component {
    render() {
        return (
            <>
            {this.props.x.map(item=>{
                return(
                    <>
                    <h3>The date is : {item.date}</h3>
                    <p>Weather Status : {item.description}</p>
                    </>
                )
        
            })}
            </>
        )
    }
}

export default weather
