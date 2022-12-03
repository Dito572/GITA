import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <Navbar className="shadow-sm p-3 mb-5 bg-white rounded" bg="light" variant="light">
    <Container style={{margin:'0'}} >
      <Navbar.Brand> <Link to='/'>Online Shop Admin</Link></Navbar.Brand>
      <Nav className="me-auto">
      <NavLink as={Link} to='/' >Products</NavLink>
      <NavLink as={Link} to='/customers' >Customers</NavLink>
      <NavLink as={Link} to='/orders' >Orders</NavLink>
      <NavLink as={Link} to='/reports' >Reports</NavLink>
      </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default NavBar;