import React, { Component } from 'react'

export class App extends Component {

  
  }

 
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelLocationNameChange} placeholder="enter city name" />
          <input type="submit" value="Explorer!" />
        </form>

        <div>
          <h2>Location Info</h2>
        </div>
      </div>
    )
  }
}

export default 
