import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="https://kitanimestreaming.blogspot.com/">KITANIME</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">NEW ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar