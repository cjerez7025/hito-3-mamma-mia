import { Navbar, Nav, Container } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

const NavBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand>🍕 Pizzería Mamma Mia!</Navbar.Brand>

        <Nav className="me-auto">
          {/* Home: siempre visible */}
          <Nav.Link>🍕 Home</Nav.Link>

          {/* Con token: Profile y Logout */}
          {token && <Nav.Link>🔓 Profile</Nav.Link>}
          {token && <Nav.Link>🔒 Logout</Nav.Link>}

          {/* Sin token: Login y Register */}
          {!token && <Nav.Link>🔐 Login</Nav.Link>}
          {!token && <Nav.Link>🔐 Register</Nav.Link>}
        </Nav>

        {/* Total: siempre visible — estático por ahora */}
        <Nav>
          <Nav.Link>🛒 Total: ${formatPrice(total)}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
