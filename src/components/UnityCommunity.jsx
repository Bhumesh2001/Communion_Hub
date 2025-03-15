import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
// import unityImg from "/assets/unity_img.avif";

export default function UnitingCommunities() {
    return (
        <Container fluid className="uniting-communities text-center">
            {/* Main Heading */}
            <h2 className="fw-bold mb-3 text-primary">Uniting Communities Through</h2>
            <h3 className="fw-bold text-dark">✦ Inspiring Events</h3>
            <p className="text-muted w-75 mx-auto">
                At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together to share meaningful experiences. From workshops to conferences, every event is designed to leave a lasting impact on our attendees.
            </p>

            {/* Events Section */}
            <Row className="align-items-center my-5 px-4 mx-4">
                <Col md={6}>
                    <h4 className="fw-bold text-dark">Trusted by Over 15k+ Individuals Worldwide</h4>
                    <Button variant="warning" className="fw-bold mt-3">
                        Explore Events <ArrowRight className="ms-2" />
                    </Button>
                </Col>
                <Col md={6}>
                    <img src="/unity_img.avif" alt="Event" width={250} className="img-fluid rounded shadow-lg" />
                </Col>
            </Row>


            {/* Statistics Section */}
            <Row className="text-center g-4 px-4 mx-4">
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">📈 98% Opportunities Expanded</h4>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">💡 89% Attendee Satisfaction</h4>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">🌍 15k+ Engaged Participants</h4>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
