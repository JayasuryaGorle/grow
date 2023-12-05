import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate} from 'react-router-dom';
import React, { useEffect, useRef } from 'react'
import { FaPersonCircleQuestion } from "react-icons/fa6";
import axios from 'axios';

function Signup() {

  let navigate = useNavigate();

  let firtsNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef(); 
  let passwordInputRef = useRef();
  let numbetInputRef = useRef();

  useEffect(()=>{
    axios.defaults.baseURL = 'http://localhost:3333/';
  })
 

 let signupFillFields =()=>{

  if(firtsNameInputRef.current.value.length ==0 ||
    lastNameInputRef.current.value.length ==0 ||
    emailInputRef.current.value.length ==0 ||
    passwordInputRef.current.value.length ==0 
    ){
    alert("Please fill in required fields")
 }else{
  alert("successfully created an account");
 }

 }


let sendSignupDataToServerInFORMData =async ()=>{

  let dataToSend = new FormData();
  dataToSend.append("fn",firtsNameInputRef.current.value);
  dataToSend.append("ln",lastNameInputRef.current.value);
  dataToSend.append("email",emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);
  dataToSend.append("number",numbetInputRef.current.value);

let response = await axios.post("/signup",dataToSend);
console.log(response);

  // let reqOptions={
  //   method:"POST",
  //   body:dataToSend
  // }

  // let JSONData = await fetch("http://localhost:3333/signup",reqOptions);
  // let JSOData = await JSONData.json();
// console.log(JSOData);

}



  return (
    <div className='signForm'>
     <img id='formImg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>
     <img id='loginimg' src='https://i.pinimg.com/564x/3c/0b/67/3c0b670e17d929978d4b70e078a3cbf4.jpg'></img>

        <Form>
    <br></br>
    <h1> Create Your <b>NYKAA</b> ID.</h1>
    <h5>One NYKAA ID is all you need to access all NYKAA services.</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><strong>First name<b>*</b></strong></Form.Label>
        <Form.Control ref={firtsNameInputRef} />
        <Form.Label><strong>Last name<b>*</b></strong></Form.Label>
        <Form.Control ref={lastNameInputRef}/>
        <Form.Label><strong>Mobile<b>*</b></strong></Form.Label>
        <Form.Control ref={numbetInputRef} type='number'/>
       <Form.Label><strong>Email address<b>*</b></strong></Form.Label>
        <Form.Control ref={emailInputRef} type="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password<b>*</b></strong></Form.Label>
        <Form.Control ref={passwordInputRef} type="password"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button id='loginButton' variant="dark" type="button" onClick={()=>{
      
     
      sendSignupDataToServerInFORMData();
      signupFillFields();  
      }}>
       Create
      </Button>
      <br></br>
      <br></br>
      <h4 id='loginInfo'><FaPersonCircleQuestion style={{marginTop:'-1.5%'}} /> Already have an Account <Link style={{textDecoration:'none'}} to="/Login">Sign in</Link></h4>
     
      <br></br>
  
    </Form>
    </div>
  )
}

export default Signup