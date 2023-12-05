import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { IoHappy } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiSolidSelectMultiple } from "react-icons/bi";



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          <img width={"25%"} src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <h3><b>New</b> Arrivals<b>'</b></h3>
      <img width={"15%"} src='https://i.pinimg.com/564x/b3/28/a0/b328a02b848b635ad10765fdb4c58686.jpg'></img>
      <img width={"15%"} src='https://i.pinimg.com/564x/75/b4/0d/75b40de5102fd9b48d21f4d92a4e6c1d.jpg'></img>
      <img width={"17%"} src='https://i.pinimg.com/564x/27/45/b9/2745b9ef8fde3d7a3a0ef89bcff1ad85.jpg'></img>
      <img width={"15%"} src='https://i.pinimg.com/564x/42/61/e2/4261e206f3efbcc5d943a631abcd7009.jpg'></img>
      <img width={"17%"} src='https://i.pinimg.com/564x/ba/87/e4/ba87e4452f161fd8599652e53df63c9d.jpg'></img>
      <img width={"17%"} src='https://i.pinimg.com/564x/90/7f/26/907f269c38c337c875ff38a5320959b9.jpg'></img>
      <img width={"18%"} src='https://i.pinimg.com/564x/68/0b/56/680b567da3aa9a97e7ab9959500685e6.jpg'></img>
      <img width={"18%"} src='https://i.pinimg.com/564x/2c/59/0b/2c590b9b65626f08215fa7d19cbc5406.jpg'></img>
      <img width={"18%"} src='https://i.pinimg.com/564x/c4/d8/ca/c4d8cabb6bb22f4e6128a9a94363deaa.jpg'></img>
      <img width={"15%"} src='https://i.pinimg.com/564x/86/af/27/86af27af1d453464788f92c0c7786d9b.jpg'></img>
      <img width={"16%"} src='https://i.pinimg.com/564x/f5/a8/5e/f5a85e97c2d5231f1688a093bae4845a.jpg'></img>
      <img width={"15%"} src='https://i.pinimg.com/564x/d0/70/7c/d0707c208800442d659b8d3493a89905.jpg'></img>

        
      </Modal.Body>
      <Modal.Footer >
        <h3>Goes further. So <b>you can</b>, too.</h3>
        <Button variant="dark" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function About() {

  const [modalShow, setModalShow] = React.useState(false);


  // let loc = useLocation();
  let navigate = useNavigate();
  let storeObj =useSelector((store)=>{return store});

  // useEffect(()=>{
  //   if(storeObj && storeObj.loginData && storeObj.loginData.data && storeObj.loginData.data.firstName){
    
  //   }else{
  //     navigate('/Login');
  //   }
  // },[]);

  return (
   
    <div id='aboutimgs'>
        <Navbar className='main' bg="dark" data-bs-theme="dark">
        <Container>
  <Navbar.Brand className='navbar' ><strong><i style={{color:'rgb(36,169,186)'}}>NYKAA</i></strong> <em style={{marginLeft:'1%'}} >MAN</em> </Navbar.Brand>
          <Nav className="me-auto">
          
          <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <BiSolidSelectMultiple   style={{color:'rgb(36,169,186)',marginTop:'-4%'}}/>  <em>Marvel Collection </em>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{height:'650px',overflow:'scroll'}}>
        <h6></h6>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-hulk-the-incredible-oversized-t-shirt/p/10339219?productId=10339219&pps=1&skuId=10339146" ><img width="100%" src='https://i.pinimg.com/564x/88/28/0e/88280e0b2500f43f066c16729ae40739.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/free-authority-young-men-iron-man-printed-blue-hoodie/p/8857005?productId=8857005&pps=3&skuId" ><img  width="100%" src='https://i.pinimg.com/564x/9d/b3/a8/9db3a8156aae930919ca3869e1ed11ff.jpg'></img></Dropdown.Item>
         <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-official-marvel-spiderman-logo-oversized-t-shirt-for-mens/p/5650679?productId=5650679&pps=3&skuId=5649341" ><img width="100%" src='https://i.pinimg.com/564x/90/ba/27/90ba270e478a4653034170852cbd6883.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-tie-dye-captain-america-shield-blue-co-ord-set-for-men/p/7535532?productId=7535532&pps=4&skuId=7535096" ><img  width="100%" src='https://i.pinimg.com/564x/0b/57/41/0b5741a6b82bbf7032cdca1b87a28814.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-thor-hammer-power-blue-color-printed-men-oversized-sweatshirts/p/8530299?productId=8530299&pps=16&skuId=8529645" ><img  width="100%" src='https://i.pinimg.com/564x/99/a6/e8/99a6e8f017e4c7e8821181443780174b.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-men-official-thor-thunder-reflective-ink-black-t-shirts/p/4474562?productId=4474562&pps=15&skuId=4472587" ><img  width="100%" src='https://i.pinimg.com/564x/18/07/8b/18078bd25836a55cb412ef28309d5454.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/macmerise-suit-up-dr-strange-wireless-portable-bluetooth-speaker/p/12465321?productId=12465321&pps=1" ><img  width="100%" src='https://i.pinimg.com/564x/01/90/e7/0190e78cacf18f40db7851b279a418a9.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/free-authority-deadpool-printed-black-t-shirt-for-men/p/12233594?productId=12233594&pps=10&skuId=12233511" ><img  width="100%" src='https://i.pinimg.com/564x/a8/d9/8b/a8d98b9f592899fce6d5801839f63fe7.jpg '></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-wolverine-weapon-x-oversized-t-shirts/p/12050297?productId=12050297&pps=1&skuId=12050036" ><img  width="100%" src='https://i.pinimg.com/564x/ae/af/ed/aeafed2af0cd69257e8ae22ebb2efb34.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-official-daredevil-no-fear-t-shirts/p/12050224?productId=12050224&pps=2&skuId=12049482" ><img  width="100%" src='https://i.pinimg.com/564x/07/61/7d/07617d8376cf0d188057bd497d910869.jpg'></img></Dropdown.Item>


        </Dropdown.Menu>
    </Dropdown>

    <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <BiSolidSelectMultiple   style={{color:'rgb(36,169,186)',marginTop:'-4%'}}/>  <em>DC Collection</em>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{height:'600px',overflow:'scroll'}}>
        <h6></h6>
        <Dropdown.Item href="https://www.nykaaman.com/smugglerz-inc-the-batman-classic-men-s-t-shirt-in-black/p/8194097?productId=8194097&pps=39&skuId=8194042" ><img width="100%" src='https://i.pinimg.com/564x/eb/9b/01/eb9b01f3ed5df72968cd66037ad9c934.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-official-superman-logo-men-performance-essential-drop-cut-t-shirt-for-mens/p/5650792?productId=5650792&pps=3&skuId=5650034" ><img  width="100%" src='https://i.pinimg.com/564x/3c/47/6b/3c476b8c490fa47963e1f9aff110468f.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/free-authority-joker-featured-white-tshirt-for-men/p/10870015?productId=10870015&pps=1&skuId=10865529" ><img  width="100%" src='https://i.pinimg.com/564x/ac/fd/0e/acfd0e6ea64af9b4982e98a76f7fa5e1.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-black-adam-legend-white-color-printed-t-shirts/p/8530322?productId=8530322&pps=1&skuId=8529819" ><img  width="100%" src='https://i.pinimg.com/564x/3c/2e/db/3c2edb043e003584460b18ef4b184935.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="https://www.nykaaman.com/the-souled-store-men-official-batman-3d-logo-black-t-shirts/p/4474544?productId=4474544&pps=1&skuId=4472467" ><img  width="100%" src='https://i.pinimg.com/564x/f4/95/6e/f4956ece79fa2e5b919a3ad7d04221b8.jpg'></img></Dropdown.Item>


        </Dropdown.Menu>
    </Dropdown>

    <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <BiSolidSelectMultiple   style={{color:'rgb(36,169,186)',marginTop:'-4%'}}/> <em>Brands</em>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{height:'600px',overflow:'scroll'}}>
      <Dropdown.Item href="https://hrxbrand.com/home" ><img width="100%" src='https://iconape.com/wp-content/png_logo_vector/hrx-logo.png'></img></Dropdown.Item>
       <Dropdown.Item href="https://www.adidas.co.in/" ><img width="100%" src='https://static.vecteezy.com/system/resources/previews/019/136/302/original/adidas-logo-adidas-icon-free-free-vector.jpg'></img></Dropdown.Item>
       <Dropdown.Item href="https://www.nike.com/in/" ><img width="100%" src='https://cdn.iconscout.com/icon/free/png-256/free-nike-1-202653.png'></img></Dropdown.Item>
         <Dropdown.Item href="https://beardo.in/" ><img width="100%" src='https://www.okeasylife.com/wp-content/uploads/2020/05/beardo1-min-300x300.jpg'></img></Dropdown.Item>
         <Dropdown.Item href="https://www2.hm.com/en_in/index.html" ><img width="100%" src='https://cdn.hyprop.co.za/image/2021/7/20/c5d53658-6abd-440c-8e42-b47b97003ea6/c37c2de9-ec4a-4553-b062-0691d5a45e09.jpg'></img></Dropdown.Item>
         <Dropdown.Item href="https://in.puma.com/in/en" ><img width="100%" src='https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png'></img></Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
          

          <Nav.Link id='homecart' title='Your profile'  ><em><IoHappy style={{color:'rgb(36,169,186)',marginTop:'-4%'}} /> {storeObj && storeObj.loginData && storeObj.loginData.data ? `${storeObj.loginData.data.firstName} ${storeObj.loginData.data.lastName}`:'user'}</em></Nav.Link>

<div id='end'>
  
    </div>

   
    <>
      <Button variant="black" onClick={() => setModalShow(true)}>
       <em>Innovation</em>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>


          </Nav>
        </Container>
      </Navbar>
      

    <Carousel data-bs-theme="dark">

      
    <Carousel.Item>
        <img className="d-block w-100" src="https://pbs.twimg.com/media/D5ySBVjV4AUhL9S?format=jpg&name=4096x4096"/>
        <Carousel.Caption id='caption'>
        <Link to="/"id='shopLink' >Shop Now <FaShopify /></Link>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img className="d-block w-100" src="https://nexuscluster.blob.core.windows.net/server01/hrx/HRX/kabir.png"/>
        <Carousel.Caption id='caption'>
          <h1><b>Hrithik Roshan</b>.</h1>
          <h3>THOSE WHO NEVER SETTLE FOR ANYTHING LESS</h3>
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

<br></br>

<div id='clothing'>   
<img width="20%" src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

<h6>RE-DEFINE YOUR FITNESS EXPERIENCE.</h6>
<h1><b>COLLECTION </b> <ImManWoman  style={{marginTop:'-1%'}}/></h1>
{/* <h1>{loc.state.data.firstName}</h1> */}
</div> 
  
<div className='maincard'> 
<Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/2f/3b/07/2f3b07b3a6d909eaa0d4af529249e6e7.jpg" />
    <Card.Body>
      <Card.Title>Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/50/d7/1b/50d71b602711a54973503acbbf3f8d57.jpg" />
    <Card.Body>
      <Card.Title>Daily Fashion</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/7a/6c/20/7a6c203a368db382f267f285d6ba664c.jpg" />
    <Card.Body>
      <Card.Title>Tshirt </Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/e8/0c/13/e80c13cb1bcbdf2e72fb32e47c03bac0.jpg" />
    <Card.Body>
      <Card.Title>T-Shirts & Shorts</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/6f/47/a4/6f47a4f41faad3aa0049d3b18986e94e.jpg" />
    <Card.Body>
      <Card.Title>Jackets & Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/8e/7a/54/8e7a54d1f5d28a91c0d9bcdd921ef87e.jpg" />
    <Card.Body>
      <Card.Title>Tops</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/6c/eb/a9/6ceba969d673713ef9b941efc7a330f0.jpg" />
    <Card.Body>
      <Card.Title>Formals</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top"  src="https://i.pinimg.com/564x/1e/ad/5c/1ead5c52073cfc5974fa24c2988d6748.jpg" />
    <Card.Body>
      <Card.Title>Jackets</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/29/91/6b/29916bb2a12b5ae284d8de50f8272984.jpg" />
    <Card.Body>
      <Card.Title>Tshirt-Grip pants</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/79/cf/05/79cf05d42632fc88a8dad08ed7ed8a9b.jpg" />
    <Card.Body>
      <Card.Title>Wedding </Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  </div>

    </div>
  )
}

export default About