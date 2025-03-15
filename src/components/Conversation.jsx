import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import communityImg1 from "../assets/conversation.avif";

export default function JoinConversation() {
    return (
        <Container fluid className="join-conversation text-center">
            {/* Main Heading */}
            <h2 className="fw-bold mb-3 text-primary">Join the Conversation</h2>
            <p className="text-muted mb-4">
                Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.
            </p>

            {/* Images & CTA */}
            <Row className="align-items-center mb-5 px-4 mx-4">
                <Col md={6}>
                    <div className="image-container">
                        <img
                            src={`${communityImg1}`}
                            alt="Community 1"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                </Col>
                <Col md={6} className="text-start my-3">
                    <h3 className="fw-bold text-dark">Where Connections Thrive and Ideas Flourish</h3>
                    <p className="text-muted">
                        Join a network of passionate individuals building meaningful conversations and lasting relationships.
                    </p>
                    <Button variant="warning" className="fw-bold btn-lg">
                        Build Connections <ArrowRight className="ms-2" />
                    </Button>
                </Col>
            </Row>

            {/* Community Stats */}
            <Row className="text-center g-3 px-4 mx-4">
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">🌍 Happy Community</h4>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">📈 210% Boost in Engagement</h4>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="stats-card">
                        <h4 className="fw-bold">🌟 172+ Ranked Communities</h4>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
