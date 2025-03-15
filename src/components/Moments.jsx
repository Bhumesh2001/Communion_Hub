import { Container, Row, Col, Card, Button } from "react-bootstrap";
import momentImge1 from "../assets/moment1img.jpg";
import momentImge2 from "../assets/moment2img.avif";
import momentImge3 from "../assets/moment3img.avif";
import momentImge4 from "../assets/moment4img.avif";
import momentImge5 from "../assets/moment5img.avif";

const moments = [
    {
        title: "Shared Service Projects",
        description: "Make a difference by joining hands to support impactful projects that uplift communities and bring positive change.",
        variant: "primary",
        image: momentImge1
    },
    {
        title: "Community Celebrations",
        description: "Experience the joy of shared festivities as we honor traditions, embrace diversity, and strengthen communal bonds.",
        variant: "success",
        image: momentImge2
    },
    {
        title: "Volunteer Gatherings",
        description: "Join like-minded individuals in meaningful initiatives, giving back to communities and building lasting connections.",
        variant: "warning",
        image: momentImge3
    },
    {
        title: "Cultural Exchanges",
        description: "Explore unique traditions, cuisines, and stories, building bridges across diverse cultures and backgrounds.",
        variant: "info",
        image: momentImge4
    },
    {
        title: "Analytics and Reporting",
        description: "Our cutting-edge social media marketing tactics will help you maximize your brand's online visibility and expand your business exponentially.",
        variant: "danger",
        image: momentImge5
    }
];

export default function MomentsOfConnection() {
    return (
        <Container fluid className="moments-of-connection text-center">
            <h2 className="fw-bold mb-3 text-primary">Moments of Connection We've Made So Far...</h2>
            <p className="text-muted w-75 mx-auto">
                Explore the impactful connections we've fostered so far, bringing together diverse communities through shared experiences, collaboration, and innovation.
            </p>

            <Button variant="warning" className="fw-bold mb-4">
                View All Moments
            </Button>

            <Row className="g-4 px-4 mx-4">
                {moments.map((moment, index) => (
                    <Col md={4} key={index}>
                        <Card className={`moment-card shadow-lg border-0 h-100 rounded-4 border-top border-${moment.variant}`}>
                            <Card.Img variant="top" src={moment.image} className="rounded-top object-fit-cover" style={{ height: "200px" }} />
                            <Card.Body>
                                <Card.Title className={`fw-bold text-${moment.variant} fs-4`}>{moment.title}</Card.Title>
                                <Card.Text className="text-muted">{moment.description}</Card.Text>
                                <Button variant="link" className={`fw-bold text-${moment.variant}`}>View Case Study &gt;</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
