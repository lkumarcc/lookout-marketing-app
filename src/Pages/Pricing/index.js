import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import portcallimage from '../../Images/portcallimage.png'
import './pricing.css';

const Pricing = () => {
  return ( 

   <div style={{backgroundColor: "#EAF1F1", height: "100vh"}}>
     {/* Container 1: Pricing & Plans */}
    <Container>
    <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <h1 style={{fontSize: "70px", fontWeight: "bolder", marginTop: "50px", marginBottom: "100px"}}>Pricing and Plans</h1>
        </Col>
        <Col sm={3}></Col>
      </Row>

      <Row>
        <Col sm={4}>
          <h1 className ="pricing-card-header"> SUBSCRIPTION 1 </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras </p>
          <Card>
          <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
          </Card>
        </Col>
        <Col sm={4}>
          <h1 className ="pricing-card-header"> SUBSCRIPTION 2 </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras </p>
          <Card>
          <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
          </Card>
        </Col>
        <Col sm={4}>
          <h1 className ="pricing-card-header"> SUBSCRIPTION 3 </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras </p>
          <Card>
          <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
          </Card>
        </Col>
      </Row>
    </Container>

    {/* Container 2: Questions */}
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <h1 style={{marginTop: "80px"}}>Questions?</h1>
          <Button style={{ backgroundColor:"#5774BF",
                          color: "#FFFFFF",
                          fontWeight: "bolder", 
                          marginTop: "20px", 
                          borderRadius: "12px" }} size="lg">
                           Contact Us </Button>
        </Col>
        <Col sm={4}>
        </Col>
      </Row>
    </Container>
    </div>

  );

};
  
export default Pricing;


