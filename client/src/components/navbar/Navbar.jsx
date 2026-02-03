import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.png";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={NavLink} to="/" className="nav-brand">
        <img src={logo} alt="logo" loading="eager" />
      </Navbar.Brand>

      {/* Toggle button opens Offcanvas */}
      <Navbar.Toggle onClick={handleShow} />

      <Navbar.Offcanvas
        show={show}
        onHide={handleClose}
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="start"
      >
        <Offcanvas.Header>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            <img src={logo} alt="logo" className="offCanvasLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              ABOUT
            </Nav.Link>
            {/* Bootstrap Dropdown */}
            <NavDropdown title="PRODUCTS" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/distribution-transformers" onClick={handleClose}>
                Distribution transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/power-transformers" onClick={handleClose}>
                Power transformer
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/furnace-transformers" onClick={handleClose}>
                Furnace transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/uss-transformers" onClick={handleClose}>
                Uss transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/dry-type-transformers" onClick={handleClose}>
                Dry type transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/cast-resin-transformers" onClick={handleClose}>
                Cast resin transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/solar-transformers" onClick={handleClose}>
                Solar transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/instrumental-transformers" onClick={handleClose}>
                Instrumental transformers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/clientele" onClick={handleClose}>
              CLIENTELE
            </Nav.Link>
            {/* Bootstrap Dropdown */}
            <NavDropdown title="INVESTOR CORNER" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/financials" onClick={handleClose}>
                Financials
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/corporate-governance" onClick={handleClose}>
                Corporate Governance
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shareholding-pattern" onClick={handleClose}>
                Shareholding Pattern
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/notices-results" onClick={handleClose}>
                Notices & Results
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/policies" onClick={handleClose}>
                Policies
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/unclaimed-dividend" onClick={handleClose}>
                Unclaimed Dividend
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact-details" onClick={handleClose}>
                Contact Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/csr" onClick={handleClose}>
              CSR
            </Nav.Link>
            <Nav.Link as={NavLink} to="/career" onClick={handleClose}>
              CAREER
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
