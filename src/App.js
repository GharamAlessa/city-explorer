import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import Weather from "./weather.js";
import Movies from "./movies";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longitude: null,
      latitude: null,
      name: null,
      error: false,
      moviesArr: [],
      weatherData: [],
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let cityName = event.target.cityName.value;
    console.log(cityName);
    await axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`
      )
      .then((result) => {
        console.log(result);
        this.setState({
          longitude: result.data[0].lon,
          latitude: result.data[0].lat,
          name: result.data[0].display_name,
        });
        console.log(`${this.state.longitude},${this.state.latitude}`);
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });

    await axios
      .get(
        `${process.env.REACT_APP_SERVER}/weather?lon=${this.state.longitude}&lat=${this.state.latitude}`
      )
      .then((result) => {
        this.setState({
          weatherData: result.data,
        });
        console.log(this.state.weatherData);
      });
     axios
      .get(`${process.env.REACT_APP_SERVER}/movies?name=${cityName}`)
      .then((result) => {
        this.setState({
          moviesArr: result.data,
        });
        console.log(this.state.moviesArr);
      });
  };
  render() {
    let urlImage = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.latitude},${this.state.longitude}`;
    return (
      <Container>
        <Row className="text-center">
          <h1 className="text-danger">City explorer</h1>
        </Row>
        <Row>
          <Col md={3}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="cityName"
                />
              </Form.Group>

              <Button variant="warning" type="submit">
                explore
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          {this.state.error ? (
            <Col>
              <h3>There was an Error</h3>
            </Col>
          ) : (
            <Col>
              <h3>City Name:{this.state.name}</h3>
            </Col>
          )}

          <Col>
            <p className="h2">longitude is:{this.state.longitude}</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <p className="h2">latitude is:{this.state.latitude}</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <Image width="400px" src={urlImage} alt="img" />
          </Col>
          <Col md={6}>
            {this.state.weatherData && <Weather x={this.state.weatherData} />}
          </Col>
        </Row>
        <Row md={6}>
          <Movies movie={this.state.moviesArr} />
        </Row>
      </Container>
    );
  }
}

export default App;
