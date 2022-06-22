import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import portcallimage from '../../Images/portcallimage.png'
import RealForm from './form'
import './contactus.css';

const ContactUs = () => {
  return ( 

   <div style={{backgroundColor: "#EAF1F1"}}>

    <Container style={{height: "100vh"}}>
      <div style={{paddingTop: "100px"}}>
      <Row>
        
        <Col sm={5} >
          <h1 style={{fontWeight: "bolder", marginBottom: "20px"}}>Any question, concern, inquiry?  Wanna know more?  Feel free to drop your info here: </h1>
          <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
        </Col>
   
        <Col sm={1}></Col>
        
        
        <Col sm={6} >
          <RealForm></RealForm>
        </Col>
       
      </Row>
      </div>
    </Container>
    </div>

  );

};
  
export default ContactUs;