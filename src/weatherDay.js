import React, { Component } from 'react'

export class weatherDay extends Component {
    render() {
        return (
            <>
              <h3>The date is : {this.props.date}</h3>
                    <p>Weather Status : {this.props.description}</p>  
            </>
        )
    }
}

export default weatherDay
