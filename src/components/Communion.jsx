import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const features = [
    {
        title: "Unifying Communities",
        description: "Communion bridges diverse religious communities, becoming the social glue for faiths, beliefs, and traditions.",
    },
    {
        title: "Innovative and Fun",
        description: "Experience faith in a fresh way through our interactive features, engaging events, and modern approach to spiritual connection.",
    },
    {
        title: "Promoting Unity",
        description: "We foster understanding and harmony between different faith communities through shared experiences and meaningful dialogue.",
    }
];

export default function WhyCommunion() {
    return (
        <Container fluid className="why-communion text-center">
            <h2 className="fw-bold mb-4 text-primary">Why Communion Rocks!</h2>
            <p className="text-muted mb-4 w-75 mx-auto">
                Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
            </p>

            <Row className="g-4 px-4 mx-4">
                {features.map((feature, index) => (
                    <Col md={4} key={index}>
                        <Card className="feature-card shadow-lg border-0 h-100 p-4 rounded-4">
                            <Card.Body>
                                <Card.Title className="fw-bold text-dark fs-5">{feature.title}</Card.Title>
                                <Card.Text className="text-muted">{feature.description}</Card.Text>
                                <Button variant="warning" className="mt-3 fw-bold learn-more-btn">
                                    Learn More <ArrowRight className="ms-2" />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
