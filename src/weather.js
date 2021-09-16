import React, { Component } from 'react'
import WeatherDay, { weatherDay } from './weatherDay'

export class weather extends Component {
    render() {
        return (
            
        this.props.x.map((item)=>{
                return(
                    
                    <WeatherDay date={item.date}
                    description={item.description}/>
                   
                )
        
            })
            
        )
    }
}

export default weather
