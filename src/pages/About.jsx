import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
    return (
        <Container className="about-page mt-5">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h2 className="about-title">About <span>CommunionHub</span></h2>
                    <p className="about-text">
                        CommunionHub is a platform designed to bring communities together by organizing and sharing events.
                        Our mission is to create a space where individuals can easily discover, participate in, and contribute to meaningful events.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={6}>
                    <Card className="about-card">
                        <Card.Body>
                            <h4 className="card-title">Why Choose Us?</h4>
                            <ul className="about-list">
                                <li>📅 Discover upcoming events in your community</li>
                                <li>🎉 Create and manage your own events</li>
                                <li>📌 Save and track your favorite events</li>
                                <li>🌎 Connect with like-minded people</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="about-card">
                        <Card.Body>
                            <h4 className="card-title">Get Involved</h4>
                            <p className="about-text">
                                Whether you're hosting a charity drive, a social meetup, or an educational seminar,
                                CommunionHub makes event management seamless and engaging. Join us today!
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
