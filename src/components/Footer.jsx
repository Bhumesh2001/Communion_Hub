import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row className="text-center text-md-start">
                    {/* Quick Links */}
                    <Col md={4} className="mb-3">
                        <h5 className="text-uppercase fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="/events" className="text-white text-decoration-none">Events</Link></li>
                            <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                        </ul>
                    </Col>

                    {/* Social Media */}
                    <Col md={4} className="mb-3 text-center">
                        <h5 className="text-uppercase fw-bold">Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.facebook.com/" className="text-white me-3 fs-4"><i className="bi bi-facebook"></i></a>
                            <a target="_blank" href="https://twitter.com/" className="text-white me-3 fs-4"><i className="bi bi-twitter"></i></a>
                            <a target="_blank" href="https://www.instagram.com/" className="text-white me-3 fs-4"><i className="bi bi-instagram"></i></a>
                        </div>
                    </Col>

                    {/* Contact Details */}
                    <Col md={4} className="mb-3 text-md-end text-center">
                        <h5 className="text-uppercase fw-bold">Contact</h5>
                        <p className="mb-1">📧 support@communionhub.com</p>
                        <p className="mb-0">📞 +1 234 567 890</p>
                    </Col>
                </Row>

                {/* Divider */}
                <hr className="bg-light" />

                {/* Copyright */}
                <Row className="text-center">
                    <Col>
                        <p className="mb-0">&copy; {new Date().getFullYear()} CommunionHub. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
