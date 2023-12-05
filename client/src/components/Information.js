import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';




function Information() {
  return (
    <div className='framework' style={{height: "680px"}}>
    <img id='fw' style={{width:'40%'}} src='../images/fw.jpg'></img>
    <h1 className='content' >Hi, I'm Jaya Surya<b style={{color:'cyan'}}>'</b> </h1>
    <h1 className='info' > Full-stack developer </h1>
   
  
    <Nav.Link  href="https://github.com/JayasuryaGorle" > <FaGithub style={{color:'cyan',marginRight:'77.4%',marginTop:'-35%',fontSize:'2rem'}} /></Nav.Link>
    <Nav.Link  href="https://www.linkedin.com/in/jaya-surya-gorle-6a7ba2245/" > <FaLinkedin style={{color:'cyan',marginRight:'70%',marginTop:'-38.6%',fontSize:'2rem'}} /></Nav.Link>


    </div>
  )
}

export default Information