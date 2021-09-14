import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import axios from "axios";

export class App extends Component {
constructor(props) {
    super(props)

    this.state = {
         longitude:null,
         latitude:null,
         name:null
    }
}

handleSubmit=(event)=>{
event.preventDefault();
let cityName=event.target.cityName.value;
console.log(cityName)
axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`)
.then(result=>{
    console.log(result.data[0])
this.setState({
    longitude:result.data[0].lon,
    latitude:result.data[0].lat,
    name:result.data[0].display_name
})
console.log(`${this.state.longitude},${this.state.latitude}`)
})


}
  render() {
    return (

      <Container>
        <Row className='text-center'>
          <h1 className='text-danger'>City explorer</h1>
        </Row>
        <Row>
            <Col md={3}>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" name="cityName" />
              
            </Form.Group>

           
            <Button variant="warning" type="submit">
             explore
            </Button>

          </Form>
          </Col>
        </Row>
        <Row className='mt-5'>
            <Col>
<h3>
    City Name:{this.state.name}
</h3>
            </Col>
            
            <Col>
<p className='h2'>longitude is:{this.state.longitude}</p>

            </Col>
            <Col className='d-flex justify-content-center'>
<p className='h2'>latitude is:{this.state.latitude}</p>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
