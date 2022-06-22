import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import portcallimage from '../../Images/portcallimage.png'
import './features.css';

// const numberheader = {
//   maxWidth: "100%",
//   maxHeight: "100%",
//   display: block,
// };

const Features = () => {
  return ( 

   <div>
     {/* Container 1: Header */}
     <Container>
       <Row>
         <Col sm={12}>
         </Col>
       </Row>
     </Container>

     {/* Container 2: Lookout n Outlook */}
     <Container>
       <Row className=" d-flex align-items-center justify-content-center">
         <Col xs={4} >
         <div className = "features-word-style-one">
          <h2 className = "features-row-header">Lookout and Outlook should go hand in hand. </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus pretium, posuere dui in, convallis nunc. Mauris pretium facilisis nisl non mollis. </p>
          </div>
         </Col>
         <Col xs={8}>
           <div className = "features-images">
           <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
           </div>
         </Col>
       </Row>
     </Container>

     {/* Container 3: Seamless */}
     <Container>
     <Row className=" d-flex align-items-center justify-content-center">
         <Col sm={8}>
         <div className = "features-images">
           <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
           </div>
         </Col>
          
         <Col sm={4}>
         <div className = "features-word-style-two">
            <h1 className = "features-row-header">Seamless sharing for everyone in the port call process. </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus pretium, posuere dui in, convallis nunc. Mauris pretium facilisis nisl non mollis. </p>
          </div>
         </Col>
       </Row>
     </Container>

     {/* Container 4: Keep track: */}
     <Container>
       <Row className=" d-flex align-items-center justify-content-center">
         <Col xs={4} >
         <div className = "features-word-style-one">
          <h2 className = "features-row-header">Keep track of all port calls.  </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus pretium, posuere dui in, convallis nunc. Mauris pretium facilisis nisl non mollis. </p>
          </div>
         </Col>
         <Col xs={8}>
           <div className = "features-images">
           <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
           </div>
         </Col>
       </Row>
     </Container>

     {/* Contianer 5: Create a SOF */}
     <Container>
     <Row className=" d-flex align-items-center justify-content-center">
         <Col sm={8}>
         <div className = "features-images">
           <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
           </div>
         </Col>
          
         <Col sm={4}>
         <div className = "features-word-style-two">
            <h2 className = "features-row-header">Create a SOF in minutes. </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus pretium, posuere dui in, convallis nunc. Mauris pretium facilisis nisl non mollis. </p>
          </div>
         </Col>
       </Row>
     </Container>


     {/* Container 6: Declutter your inbox */}
     <Container>
       <Row className=" d-flex align-items-center justify-content-center">
         <Col xs={4} >
         <div className = "features-word-style-one">
          <h2 className = "features-row-header">Never miss an update. Declutter your inbox permanently. </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis risus pretium, posuere dui in, convallis nunc. Mauris pretium facilisis nisl non mollis. </p>
          </div>
         </Col>
         <Col xs={8}>
           <div className = "features-images">
           <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
           </div>
         </Col>
       </Row>
     </Container>

     

     {/* Container 7: Words here */}
     <Container>
       <div className = "container-seven-styling">
       <Row>
         <Col sm={12}>
          <h2 className = "features-footer-header">Words Here. Power Stance. </h2>
          <p fontSize = "40px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis sapien turpis.</p>
         </Col>
       </Row>
       <Row>
         <Col sm={6}>
           <Button variant="primary"> Click for Demo </Button>
         </Col>
         <Col sm={6}>
         <Button variant="primary"> Plans and Pricing </Button>
         </Col>
       </Row>
       <Row>
       <Col sm={12}>
         <div>
       <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
       </div>
       </Col>
       </Row>
       </div>
     </Container>
    </div>

  );

};
  
export default Features;