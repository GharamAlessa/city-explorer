import React, { Component } from "react";
import Movie from "./movie"

export class movies extends Component {
  render() {
    return (
      <>
        {this.props.movie.map((item) => {
          return (
           <Movie img={item.img}
           title={item.title}
           overView={item.overView}
           total={item.total}
           date={item.date}
           pop={item.pop}/>
          );
        })}
      </>
    );
  }
}

export default movies;
