import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSearch,BiUser} from "react-icons/bi"
import {BsHandbag} from "react-icons/bs"
import BackImg from "./logo.png";
import { useNavigate } from 'react-router-dom';
import {Logo,Icons} from './styles'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Navs() {
  const navigate = useNavigate();
  const onbagClicked = () =>{
    navigate('/bag');
  };
  const onUserClicked = () =>{
    navigate('/Login');
  };
  const onSearchClicked = () =>{
    navigate('/Search');
  };
  const onlogoClicked = () =>{
    navigate('/HomePage');
  };
  const onRestaurantsClicked = () =>{
    navigate('/Restaurants');
  };
  const onChefsClicked = () =>{
    navigate('/Chefs');
  };
  const onContactUsClicked = () =>{
    navigate('/ContactUs');
  };
  const onTermofUseClicked = () =>{
    navigate('/TermofUse');
  };
   const onPrivacyPolicyClicked = () =>{
    navigate('/PrivacyPolicy');
  };
  return (
    <Navbar  expand="lg" dir="rtl">
      <Container>
        <Icons>
            <Navbar.Brand onClick={onbagClicked}>  <BsHandbag/>  </Navbar.Brand>
            <Navbar.Brand onClick={onUserClicked}>  <BiUser/>  </Navbar.Brand>
            <Navbar.Brand onClick={onSearchClicked}>  <BiSearch/>  </Navbar.Brand>
            
        </Icons>

        <Logo>
             <Navbar.Brand onClick={onlogoClicked}>  <img src={BackImg}/>  </Navbar.Brand>
       </Logo> 
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={onRestaurantsClicked}> Restaurants </Nav.Link>
            <Nav.Link onClick={onChefsClicked}> Chefs </Nav.Link>
            <Nav.Link onClick={onContactUsClicked}> Contact Us </Nav.Link>
            <Nav.Link onClick={onTermofUseClicked}> Term of Use </Nav.Link>
            <Nav.Link onClick={onPrivacyPolicyClicked}> Privacy Policy </Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>

{/* 
    <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog> */}
    </Navbar>
  );
}

export default Navs;