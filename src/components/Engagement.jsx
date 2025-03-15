import { Container, Row, Col, Card } from "react-bootstrap";
import { Globe, People, Cpu, BarChart } from "react-bootstrap-icons";

const features = [
    {
        icon: <Globe size={40} className="text-warning" />,
        title: "Global Connectivity",
        description: "Connecting people from diverse religious communities worldwide, fostering meaningful engagement."
    },
    {
        icon: <People size={40} className="text-warning" />,
        title: "Inclusive Collaboration",
        description: "Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships."
    },
    {
        icon: <Cpu size={40} className="text-warning" />,
        title: "Innovative Technology",
        description: "Utilizing cutting-edge tools to enhance user experience and encourage active participation."
    },
    {
        icon: <BarChart size={40} className="text-warning" />,
        title: "Daily Growth",
        description: "Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet."
    }
];

export default function DailyEngagements() {
    return (
        <Container fluid className="daily-engagements text-center">
            <h2 className="fw-bold mb-3 text-primary">More Than 10,000+ Engagements Daily</h2>
            <p className="text-muted w-75 mx-auto">
                Experience the power of connection with over 10,000 daily interactions worldwide, uniting diverse communities through innovation, collaboration, and shared spirituality.
            </p>

            {/* Features Grid */}
            <Row className="g-4 mt-4 px-4 mx-4">
                {features.map((feature, index) => (
                    <Col md={6} key={index}>
                        <Card className="feature-card shadow-lg border-0 h-100 p-4 rounded-4">
                            <Card.Body>
                                <div className="mb-3">{feature.icon}</div>
                                <Card.Title className="fw-bold text-dark">{feature.title}</Card.Title>
                                <Card.Text className="text-muted">{feature.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
