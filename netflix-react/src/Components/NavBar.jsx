
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';




const NavBar = (props) => {
    return (

<Navbar collapseOnSelect expand="lg"  width="100" className="mr-2">
  <Navbar.Brand href="#home"><img src={props.logo} height="48" alt="netflix-logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing" className="active" id="active">Movies</Nav.Link>
      <Nav.Link href="#pricing">Recently Added</Nav.Link>
    </Nav>
    <Nav>
    <img src={props.avatar} alt="avatar" height="32" width="32" />
      <NavDropdown id="collasible-nav-dropdown " variant="dark" >
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Link href="#deets"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        KIDS
      </Nav.Link>
      <Nav.Link href="#deets"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
      </svg>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    );
}

export default NavBar;