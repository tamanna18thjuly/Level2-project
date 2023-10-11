import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../style.css";

function NavScroll() {
  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'red',color:'whitesmoke'}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:'white',fontSize:45,fontFamily:'sansserif'}}>International Fashion Idol 2023</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '180px',color:'white',fontSize:32 }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Men's</Nav.Link>
            <Nav.Link href="#action2">Women's</Nav.Link>
            <Nav.Link href="#action2">Kid's</Nav.Link>

            <NavDropdown title="Others" id="navbarScrollingDropdown">

                <NavDropdown.Item href="#action4">
                    Contact Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Feedbacks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    About Us
                </NavDropdown.Item>

            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;