import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import portcallimage from '../../Images/portcallimage.png'
import './features.css';
import RealCarousel from './Carousel'




const Features = () => {
  return ( 

   <div>
     {/* Container 1: Header */}
     <div style={{backgroundColor: "#EAF1F1"}}>
     <Container>
       <Row>
         <Col sm={3}>
           </Col>
         <Col sm={6}>
           <div style={{ marginTop: "100px",  marginBottom: "50px"}}>
         <h1 className = "features-row-header">Port Calls have never been easier. Features made by our teams for yours.</h1>
         </div>
         </Col>
         <Col sm={3}>
         </Col>
       </Row>

       <Row>
       <Col sm={2}>
           </Col>
         <Col sm={8}>
           <RealCarousel></RealCarousel>
         </Col>
         <Col sm={2}>
           </Col>
       </Row>

       <Row>
         <Col sm={3}>
           </Col>
         <Col sm={6}>
           <div style={{ marginTop: "30px",  marginBottom: "70px", color: "#246A73"}}>
           <p>Click to find out more</p>
           </div>
         </Col>
         <Col sm={3}>
         </Col>
       </Row>

     </Container>
     </div>

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

     

     {/* Container 7: Footer */}
     <div className = "container-seven-styling">
     <Container>
       
       <Row>
         <Col sm={4}></Col>
         <Col sm={4}>
           <div className = "align-items-center justify-content-center">
          <h1 className = "features-footer-header">Words Here. Power Stance. </h1>
          <p style={{fontSize: "20px",  marginTop: "40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis sapien turpis.</p>
          </div>
         </Col>
         <Col sm={4}></Col>
       </Row>
       <Row>
         <Col sm={3}></Col>
         <Col sm={3}>
           <Button style={{ backgroundColor: "#FFFFFF",
                             color: "#000000",
                             fontWeight: "bolder", 
                             marginTop: "20px" }}
                            size="lg"> 
                            Click for Demo </Button>
         
         </Col>
         <Col sm={3}>
         <Button style={{ backgroundColor: "#FFFFFF",
                          color: "#000000",
                          fontWeight: "bolder", 
                          marginTop: "20px"  }} size="lg">
                           Plans and Pricing </Button>
         </Col>
         <Col sm={3}></Col>
       </Row>
       <Row>
       <Col sm={12}>
         <div className = "features-footer-image">
       <Image src={portcallimage} className='img-fluid shadow-4' alt='...'></Image>
       </div>
       </Col>
       </Row>
       
     </Container>
     </div>
    </div>

  );

};
  
export default Features;