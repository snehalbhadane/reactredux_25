import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">React Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link> 
                     <Link className="nav-link" to="/competency">Competency</Link> 
                     <Link className="nav-link" to="/user">User</Link> 
                </Nav>
            </Navbar.Collapse>
        </Container>
         </Navbar>
  )
}

export default Header
