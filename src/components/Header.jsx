import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import CommunionHubLogo from "/assets/communionhublogo.png";

export default function Header() {
    const location = useLocation(); // To highlight active link

    return (
        <Navbar expand="lg" className="p-3 shadow-lg custom-navbar fixed-top">
            <Container>
                {/* Brand Name */}
                <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-4">
                    <img src="/communionhublogo.png" className="img-fluid" width={150} alt="CommunionHub Logo" />
                </Navbar.Brand>

                {/* Responsive Toggle Button */}
                <Navbar.Toggle aria-controls="navbar-nav" className="border-0 bg-white px-2" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={`nav-link-custom ${location.pathname === "/about" ? "active" : ""}`}
                        >
                            About
                        </Nav.Link>

                        <NavDropdown title="Events" id="events-dropdown" className="nav-dropdown-custom">
                            <NavDropdown.Item as={Link} to="/events">
                                📅 Upcoming Events
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/events/create">
                                ✏️ Create Event
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
