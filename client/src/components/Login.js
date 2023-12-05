import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Login() {
  let navigate = useNavigate();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let dispatch = useDispatch();

  useEffect(()=>{

    axios.defaults.baseURL = 'http://localhost:3333/';

  },[])
   
let validateloginThruAxios = async()=>{

  let dataToSend = new FormData();
  dataToSend.append("email",emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);

  let response = await axios.post("/validateLogin",dataToSend);
  console.log(response);

  // let reqOptions = {
  //   method:"POST",
  //   body:dataToSend
  // }

  // let JSONData = await fetch("http://localhost:3333/validateLogin",reqOptions);
  // let JSOData = await JSONData.json();

 

  if(response.data.status == "Success"){
    console.log(response.data);

    dispatch({type:'login',data:response.data});

    alert(response.data.msg)
    navigate("/About");
  }else{
    alert(response.data.msg)
  }


  console.log(response); 

}
  

  return (
    <div className='formHead'>
     <img id='formImg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>
<img id='loginimg' src='https://i.pinimg.com/564x/a2/66/cf/a266cf79100e06faf26fecf00e5f796c.jpg'></img>
<Form>
    <br></br>
    <h1> Sign in for <b>faster</b> checkout.</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Email address<b>*</b></strong></Form.Label>
        <Form.Control ref={emailInputRef}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password<b>*</b></strong></Form.Label>
        <Form.Control ref={passwordInputRef}  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  label="Remember me" />
      </Form.Group>
      <Button id='loginButton' variant="dark" type="button" onClick={()=>{

validateloginThruAxios();
navigate("/About");

// if(emailInputRef.current.value.length == 0 ||
//   passwordInputRef.current.value.length == 0){
//     alert("Please fill * fields");
//   }else{
//     navigate("/About")
//   }
      }}>Sign in</Button>
      <br></br>
      <br></br>
      <h4 id='loginInfo'>Don't have an Account<b>?</b> <Link style={{textDecoration:'none'}} to="/Signup">Sign Up</Link></h4>
     
      <br></br>
      <br></br>
    </Form>
         
    </div>
    
  )
}

export default Login