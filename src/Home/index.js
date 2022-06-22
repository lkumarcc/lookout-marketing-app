import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import portcallimage from '../Images/portcallimage.png'
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

   <div>
     {/* -Container 1: Header */}
     <div className="container-spacing">
    <Container>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <h1 className = "home-header" style={{fontSize: "80px", marginLeft: "50px", marginRight: "50px", marginTop: "50px"}}> Welcome to Port Lookout </h1>
          <p> tagline tagline tagline Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </Col>
        <Col sm={3}>
          
        </Col>
      </Row>
      <Row>
        <Col sm={4}></Col>
        <Col sm={2}>
          <Button style={buttonstyle}>Request a Demo</Button>
        </Col>
        <Col sm={2}>
          <Button style={buttonstyle}>Learn More</Button>
        </Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div style={imgStyleTemp}>
        <Image src={portcallimage} className='img-fluid shadow-4' alt='...' style={{borderRadius: "15px"}} ></Image>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
    {/* -Container 2: Handling your port calls  */}
    <div className="container-spacing">
    <Container>
      <Row>
        <Col sm={2}>
          
        </Col>
        <Col sm={8}>
          <h1 className = "home-header" style={{marginLeft: "20px", marginRight: "20px", fontWeight:"bolder"}}>Handling your port calls should be frictionless.</h1>
          <p style={{marginBottom: "50px"}}>Lorem ipsum dolor sit amet</p>
        </Col>
        <Col sm={2}>
          
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="home-three-row">
            <div className="home-three-image">
            <Image src={portcallimage} className='img-fluid rounded' alt='...'></Image>
            </div>
            <h2 className = "home-header" >Updates</h2>
            <p>Cras nulla in massa et. Nisl volutpat nulla </p>
          </div>
          </Col>
        <Col sm={4}>
          <div className="home-three-row">
            <div className="home-three-image"> 
            <Image src={portcallimage} className='img-fluid rounded' alt='...' ></Image>
            </div>
            <h2 className = "home-header" >Documentation</h2>
            <p>Cras nulla in massa et. Nisl volutpat nulla </p>
          </div>
          </Col>
        <Col sm={4}>
        <div className="home-three-row">
          <div className="home-three-image">
          <Image src={portcallimage} className='img-fluid rounded' alt='...'></Image>
          </div>
          <h2 className = "home-header" >Port Info</h2>
          <p>Cras nulla in massa et. Nisl volutpat nulla </p>
          </div>
          </Col>
       
      </Row>
    </Container>
    </div>

    {/* -Container 3: Don’t ditch your teams */}
    <div className="container-spacing">
    <Container>
      <Row>
        <Col sm={10}>
          <div className = "home-container-left">
            <h1 className = "home-header">Don’t ditch your teams.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla in massa et. Nisl volutpat nulla massa aliquet vivamus. Proin montes, lectus vitae eleifend rhoncus ornare nisl. </p>
          </div>
        </Col>
        <Col sm={2}>
            
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
            
        </Col>
        <Col sm={10}>
        <Image src={portcallimage} className='img-fluid shadow-4' alt='...' style={{borderRadius: "15px"}}></Image>
        </Col>
      </Row>
    </Container>
    </div>

    {/* -Container 4: Stay organized */}

    <div className="container-spacing">
    <Container>
      <Row>
        <Col sm={2}>
            
        </Col>
        <Col sm={10}>
          <div style={{textAlign: "right", marginBottom: "40px"}}>
            <h1 className = "home-header">Stay organized n access vessels tip of da fingie</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla in massa et. Nisl volutpat nulla massa aliquet vivamus. Proin montes, lectus</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
        <Image src={portcallimage} className='img-fluid shadow-4' alt='...' style={{borderRadius: "15px"}}></Image>
        </Col>
        <Col sm={2}>
                
        </Col>
      </Row>
    </Container>
    </div>

    {/* -Container 5: Access Each Ship */}
    <div className="container-spacing">
    <Container>
    <Row>
        <Col sm={10}>
          <div className = "home-container-left">
            <h1 className = "home-header">Access Each Ship -- port info, doc, statement of fax</h1>
            <p>in massa et. Nisl volutpat nulla massa aliquet vivamus. Proin montes, lectus vitae eleifend rhoncus ornare nisl. Consequat turpis vivamus ullamcorper felis venenatis aliquet lacus commodo nulla.</p>
          </div>
        </Col>
        <Col sm={2}>
            
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
            
        </Col>
        <Col sm={10}>
        <Image src={portcallimage} className='img-fluid shadow-4' alt='...' style={{borderRadius: "15px"}}></Image> 
        </Col>
      </Row>
    </Container>
    </div>

    {/* -Container 6: Hear from potential users */}
    <div className="container-spacing">
    <Container>
    <Row>
      <Col sm={12}>
        <h1 className="home-header">Hear from potential users or clients or whoeva :</h1>
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
      <div>
        <h2 className="home-header">Statistic here</h2>
        <p>Lorem ipsum dolor sit amet, </p>
      </div>
      </Col>
      <Col sm={2}>
        
      </Col>
      <Col sm={5}>
      <div>
        <h2 className="home-header">Statistic here</h2>
        <p>Lorem ipsum dolor sit amet, </p>
      </div>        
      </Col>
    </Row>
    <Row>
      <Col sm={2}>

      </Col>
      <Col sm={6}>
        <div>
          <h2 className="home-header">Statistic here</h2>
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
      </Col>
      <Col sm={2}>
      
      </Col>
    </Row>
    </Container>
    </div>

    </div>

  );

};
  
export default Home;