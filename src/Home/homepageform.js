import emailjs from 'emailjs-com';
import React, {userRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// 'YOUR_SERVICE_ID': "service_sb2r8jj"
// 'YOUR_TEMPLATE_ID': "template_dbuw38j"
//  form.current
//  'YOUR_PUBLIC_KEY': "-xpteNkleZt6Ig0og"


function HomepageButton() {
    const buttonstyle = {
        backgroundColor:"#5774BF",
        color: "#FFFFFF",
        fontWeight: "bolder", 
        // marginTop: "20px", 
      };
    // const form = userRef();

    // const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     form.current,
    //     'YOUR_PUBLIC_KEY'
    // ).then(
    //     result => console.log(result.text),
    //     error => console.log(error.text)
    // )}
    
    // ref={form} onSubmit={sendEmail} backgroundColor:"#5774BF"

  return (
    <>
      <InputGroup>
        <Button style={buttonstyle}>
          Email
        </Button>
        <Form.Control
          aria-label="user_email"
          name = "user_email" required
        />
      </InputGroup>

    </>
  );
}

export default HomepageButton;