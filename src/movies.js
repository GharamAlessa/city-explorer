import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class movies extends Component {
  render() {
    return (
      <>
        {this.props.movie.map((item) => {
          return (
            <Col className='d-flex justify-content-center mt-5' >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text> Over view: {item.overView}</Card.Text>

                  <Card.Text>Avarage Votes: {item.avgVotes}</Card.Text>
                  <Card.Text>Total Votes: {item.total}</Card.Text>
                  <Card.Text>Released Date:  {item.date}</Card.Text>

                  <Card.Text>Popularity: {item.pop}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}

export default movies;
