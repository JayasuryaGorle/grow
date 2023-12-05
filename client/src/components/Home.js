import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RiWomenLine } from "react-icons/ri";
import { IoMdMale } from "react-icons/io";
import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { PiPersonSimpleThrowBold  } from "react-icons/pi";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


function OffCanvasExample({...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
      Help
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title><i>NYKAA</i>.</Offcanvas.Title> */}
          <img width="35%" src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <strong>
        Hello. What can we help you with?   <FaHandsHelping  style={{color:'red'}}/> 
        <img width="40%" src='https://render.fineartamerica.com/images/rendered/search/print/5.5/8/break/images/artworkimages/medium/1/moon-man-nicholas-ely.jpg'></img>
        <br></br>
        <br></br>
       <i>*</i> Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.
        </strong>
        <br></br>
<img width="100%" src='https://www.capitalmind.in/wp-content/uploads/2021/09/Neon-Green-60x36-Landscape-Voters-Education-Banner6-scaled.jpg'></img>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Home() {

  let navigate = useNavigate();





  return (
    
      <div className='main'>
        
        <Navbar className='main' bg="dark" data-bs-theme="dark">
        <Container>
  <Navbar.Brand className='navbar' href="/"><strong><i>NYKAA</i></strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#home" onClick={()=>{
              navigate("/Boy")
            }}><em><IoMdMale style={{color:'cyan',marginTop:'-4%'}}/> Men</em></Nav.Link>
            <Nav.Link href="#features" onClick={()=>{ 
              navigate("/Girl")
            }}><em><RiWomenLine style={{color:'cyan',marginTop:'-4%'}} /> Women</em></Nav.Link>
            
            <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <PiPersonSimpleThrowBold  style={{color:'cyan',marginTop:'-4%'}} />  <em>Categories</em>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{height:'600px',overflow:'scroll'}}>
       
        <Dropdown.Item href="/Girl" ><img  width="100%" src='https://i.pinimg.com/564x/89/6b/92/896b92aa6d9f30fd02cfce0d80008f33.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Girl" ><img  width="100%" src='https://i.pinimg.com/564x/3f/28/67/3f286744139f1b01c8c28e06418e5f60.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Girl" ><img  width="100%" src='https://i.pinimg.com/564x/eb/83/48/eb8348203894fc08a26cb62cce3884ba.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Girl" ><img width="100%" src='https://i.pinimg.com/564x/9f/5c/8a/9f5c8a3df52d9e15abfd5cc240786e7c.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Girl" ><img  width="100%" src='https://i.pinimg.com/564x/f3/92/eb/f392ebbe14e3083323ab93df972df4d8.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Boy" ><img  width="100%" src='https://i.pinimg.com/564x/9e/27/3b/9e273b761219e131981f8525c158a12b.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Boy" ><img width="100%" src='https://i.pinimg.com/564x/a7/ae/b3/a7aeb3f922240c4e8794a416ad8a0a46.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="/Boy" ><img  width="100%" src='https://i.pinimg.com/564x/84/33/f7/8433f7beb975818b9f18ff07dee04b6a.jpg'></img></Dropdown.Item>


        </Dropdown.Menu>
    </Dropdown>
           
           <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <BiSolidSelectMultiple   style={{color:'cyan',marginTop:'-4%'}}/> <em>Brands</em>
      </Dropdown.Toggle>

  <Dropdown.Menu style={{height:'600px',overflow:'scroll'}} >
        
        <Dropdown.Item href="https://www.adidas.co.in/originals" ><img width="100%" src='https://static.vecteezy.com/system/resources/previews/019/136/302/original/adidas-logo-adidas-icon-free-free-vector.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nivea.in/" ><img width="100%" src='https://1000logos.net/wp-content/uploads/2021/10/Nivea-logo.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://hrxbrand.com/home" ><img width="100%" src='https://iconape.com/wp-content/png_logo_vector/hrx-logo.png'></img></Dropdown.Item>
        <Dropdown.Item href="https://pmdbeauty.com/" ><img width="100%" src='https://pmdbeauty.com/cdn/shop/files/logo_acf675c8-5c15-4566-b80c-991026cd0c9e.png?v=1614288895'></img></Dropdown.Item>
        <Dropdown.Item href="https://rowdyclub.in/" ><img width="100%"  src='https://rowdyclub.in/images/Logo.png'></img></Dropdown.Item>
        <Dropdown.Item href="https://in.puma.com/in/en" ><img width="100%" src='https://static.vecteezy.com/system/resources/previews/010/994/337/non_2x/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-red-background-free-vector.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.laneige.com/int/en/index.html" ><img width="100%" src='https://www.laneige.com/int/en/assets/image/a/laneige-logo.svg'></img></Dropdown.Item>
       <Dropdown.Item href="https://www.nykaa.com/" ><img width="100%" src='https://media.licdn.com/dms/image/C4E12AQG0cNSFpTRCww/article-cover_image-shrink_600_2000/0/1591535753989?e=2147483647&v=beta&t=5JX-BAB3b89kvUvez48FMI3bDZuPL_em21gTIcm-4zI'></img></Dropdown.Item>
       <Dropdown.Item href="https://beardo.in/" ><img width="100%" src='https://beardo.in/cdn/shop/files/beardo_logo_white_png_1_1.png?v=1679984474&width=500'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nike.com/in/" ><img width="100%" src='https://cdn.iconscout.com/icon/free/png-256/free-nike-1-202653.png'></img></Dropdown.Item>

        </Dropdown.Menu>
    
    </Dropdown>

    <Nav.Link href="#features" onClick={()=>{ 
              navigate("/Information")
            }}><em><RiContactsFill style={{color:'cyan',marginTop:'-4%'}} /> Contact</em></Nav.Link>
            
            <Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CgProfile style={{color:'cyan',marginTop:'-4%'}}/> <strong> Profile</strong> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <h6>Hello anonymous  <img id='fw' style={{width:'40%',marginLeft:'30%'}} src='../images/fw.jpg'></img></h6>
        <Dropdown.Item href="#/action-1" onClick={()=>{
           navigate("/Login")
        }}><SiGnuprivacyguard style={{color:'cyan',marginTop:'-4%'}}/> Sign in</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{
          navigate("/Signup")
        }}><MdManageAccounts style={{color:'cyan',marginTop:'-4%'}}/> Add account</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown >
    <Link id='homecart' to="/Cart"><ImCart style={{color:'cyan'}}/> <em>Cart</em></Link>

<div id='end'>
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
    </div>


          </Nav>
        </Container>
      </Navbar>
   
    <div id='aboutimgs'>

      <Carousel data-bs-theme="dark">

      <Carousel.Item>
          <img className="d-block w-100"  src="https://pbs.twimg.com/media/D5ySA9nUYAAAzVP?format=jpg&name=4096x4096"/>
          <Carousel.Caption id='caption'>
          {/* <h1>Be a member of Nykaa squad</h1>
            <h6>THOSE WHO NEVER SETTLE FOR ANYTHING LESS</h6> */}
          </Carousel.Caption>
        </Carousel.Item>

 <Carousel.Item id='item'>
          <img className="d-block w-100" src="https://film-grab.com/wp-content/uploads/photo-gallery/Into_the_Spider-Verse_013.jpg?bwg=1569496332"/>
         <Carousel.Caption >
         
    </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
          <video className="d-block w-100" src='https://nexuscluster.blob.core.windows.net/server01/hrx/home/topvideo-vE5EuNdnxgL0Ck7fK5IGu-1655477435' controls ="" muted autoPlay loop ></video>
          <Carousel.Caption id='caption' >
            <h1><b>HRX</b></h1>
            <h3>FIND YOUR EDGE</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel> 
  
    
  
      </div>
      
      <img id='homeimg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

<img style={{width:'20%'}} id='shopeimgs' src='https://i.pinimg.com/564x/43/9e/7c/439e7cfe772ee03c56e1e9023ac3620c.jpg'></img>
<img style={{width:'25%'}} id='shopeimgs' src='https://i.pinimg.com/564x/c8/ff/e4/c8ffe489e5b8439c28866c855f6eec1c.jpg'></img>
<img style={{width:'23%'}} id='shopeimgs' src='https://i.pinimg.com/564x/73/e3/c5/73e3c5403f86758807d59a306dbc1a8f.jpg'></img>
<img style={{width:'25%'}} id='shopeimgs' src='https://i.pinimg.com/564x/83/d5/e9/83d5e97b422c19de8f6cafa6a2051717.jpg'></img>
<img style={{width:'25%'}} id='shopeimgs' src='https://i.pinimg.com/564x/a4/e2/20/a4e22044f579f5321042fcde1a3c1298.jpg'></img>



    </div>
  
  )
}

export default Home