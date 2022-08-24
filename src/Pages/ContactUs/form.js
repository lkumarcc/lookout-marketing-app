import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
import { Container, Row, Col, Image, Button, Card} from 'react-bootstrap';
import {Form, FormGroup, Input,  Label} from 'reactstrap';

  
      
const RealForm = () => {

    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_biaju3u', form.current, '-xpteNkleZt6Ig0og')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.rest()
    };
    return ( 

    <div>
        <Card>
        <Card.Header style={{backgroundColor: "#5774BF"}}></Card.Header>
        <Card.Body>
        <div style={{textAlign: "left"}}>
        <Form onSubmit={sendEmail}>
            {/* Name */}
            <Row>
                <Col sm={12}>
                <FormGroup>
                    <Label>NAME</Label>
                    <Input
                    id="exampleName"
                    name="name"
                    placeholder="name placeholder"
                    type="name"
                    />
                </FormGroup>
                </Col>
            </Row>
            {/* Company */}
            <Row>
            <Col sm={12}>
                <FormGroup>
                    <Label>COMPANY</Label>
                    <Input
                    id="exampleCompany"
                    name="Company"
                    placeholder="company placeholder"
                    type="company"
                    />
                </FormGroup>
                </Col>
                </Row>
            {/* Email */}
            <Row>
            <Col sm={12}>
                <FormGroup>
                    <Label>EMAIL</Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    />
                </FormGroup>
                </Col>
                </Row>
            {/* Phone */}
            <Row>
            <Col sm={12}>
                <FormGroup>
                    <Label for="examplePhone">PHONE</Label>
                    <Input
                    id="examplePhone"
                    name="Phone"
                    placeholder="phone placeholder"
                    type="Phone"
                    />
                </FormGroup>
                </Col>
                </Row>
            {/* Message */}
            <Row>
            <Col sm={12}>
                <FormGroup>
                    <Label>MESSAGE</Label>
                    <Input
                    id="exampleMessage"
                    name="message"
                    placeholder="message placeholder"
                    type="message"
                    width="300"
                    />
                </FormGroup>
                </Col>
                </Row>
            
                <Button type = "submit" variant="primary" size="xl" style={{backgroundColor: "#246A73", borderRadius: "12px"}}>
                    Submit
                </Button>
        </Form>

        
        </div>

        </Card.Body>

        </Card>
        </div>

    );


    // };
};
  
export default RealForm;


// <FormGroup>
// <Label for="exampleAddress">
//   Address
// </Label>
// <Input
//   id="exampleAddress"
//   name="address"
//   placeholder="1234 Main St"
// />
// </FormGroup>
// <FormGroup>
// <Label for="exampleAddress2">
//   Address 2
// </Label>
// <Input
//   id="exampleAddress2"
//   name="address2"
//   placeholder="Apartment, studio, or floor"
// />
// </FormGroup>
// <Row>
// <Col sm={6}>
//   <FormGroup>
//     <Label for="exampleCity">
//       City
//     </Label>
//     <Input
//       id="exampleCity"
//       name="city"
//     />
//   </FormGroup>
// </Col>
// <Col sm={4}>
//   <FormGroup>
//     <Label for="exampleState">
//       State
//     </Label>
//     <Input
//       id="exampleState"
//       name="state"
//     />
//   </FormGroup>
// </Col>
// <Col sm={2}>
//   <FormGroup>
//     <Label for="exampleZip">
//       Zip
//     </Label>
//     <Input
//       id="exampleZip"
//       name="zip"
//     />
//   </FormGroup>
// </Col>
// </Row>