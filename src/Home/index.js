import React from 'react';
import { Container, Row, Col, Image, InputGroup, Form, Button } from 'react-bootstrap';
import portcallimage from '../Images/portcallimage.png'
import HomepageButton from './homepageform.js'
import './home.css';

const buttonstyle = {
  marginRight: 30,
  marginLeft: 10,
  backgroundColor:"#5774BF",
  color: "#FFFFFF",
  fontWeight: "bolder", 
  // marginTop: "20px", 
  borderRadius: "12px",
  size: "xl"
};

const imgStyleTemp = {
  marginTop: "60px",
  marginLeft: "80px",
  marginRight: "80px",

};

const Home = () => {
  return ( 

   <div className = "homepage-background">
     {/* container one: Header */}
     <Container>
       <Row>
         <Col sm={3}></Col>
         <Col sm={6}>
           <h1 className = "home-header" style={{fontSize: "80px", marginLeft: "50px", marginRight: "50px", marginTop: "50px"}}>Welcome to Port Lookout</h1>
         </Col>
         <Col sm={3}></Col>
       </Row>

     </Container>

     
     {/* container two: middle words */}
     <Container>
        <Row>
         <Col sm={4}></Col>
         <Col sm={4}>
           <h3 className = "home-header" style={{marginTop: "50px", marginBottom: "20px"}}>Coming Soon!</h3>
           <p style={{color: "#ECECEC"}}>A web based platform enabling vessel operators to manage all port call activity.</p>
         </Col>
         <Col sm={4}></Col>
       </Row>

     </Container>


     {/* container three: buttons! */}
     <Container>
      <Row>
         <Col sm={3}></Col>
         <Col sm={6}>
            <HomepageButton></HomepageButton>
         </Col>
         <Col sm={3}></Col>
      </Row>

     </Container>


    </div>

  );

};
  
export default Home;