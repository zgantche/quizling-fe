import { Nav, Navbar } from 'react-bootstrap';

const HeaderMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Quizling (◕‿◕✿)</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/createQuiz">Create a New Quiz</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/zgantche/quizling-fe">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderMenu;