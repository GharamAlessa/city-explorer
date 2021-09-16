import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
export class movie extends Component {
  render() {
    return (
      <Col className="d-flex justify-content-center mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text> Over view: {this.props.overView}</Card.Text>

            <Card.Text>Avarage Votes: {this.props.avgVotes}</Card.Text>
            <Card.Text>Total Votes: {this.props.total}</Card.Text>
            <Card.Text>Released Date: {this.props.date}</Card.Text>

            <Card.Text>Popularity: {this.props.pop}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default movie;
