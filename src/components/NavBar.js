import { Container } from "react-bootstrap"

export const NavBar = () => {
  return(
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="{''}" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-control="basic-navbar-nav"> 
          <span className="navbar-toggle-cion"></span>
        </Navbar.Toggle>
            <Navbar.collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                  <NavbarDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavbarDropdown.Item href="#action/3.1">Action</NavbarDropdown.Item>
                    <NavbarDropdown.Item href="#action/3.2">Another Action</NavbarDropdown.Item>
                    <NavbarDropdown.Item href="#action/3.3">something</NavbarDropdown.Item>
                    <Navbar.Divider />
                    <Navbar.Dropdown.Item href="#action/3.4">Separated link</Navbar.Dropdown.Item>
                  </NavbarDropdown>
              </Nav>
            </Navbar.collapse>
      </Container>
    </Navbar>
  )
}