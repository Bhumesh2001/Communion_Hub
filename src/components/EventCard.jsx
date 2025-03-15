import { Card } from "react-bootstrap";

export default function EventCard({ event }) {
    return (
        <Card className="event-card mb-4">
            <Card.Body>
                <Card.Title className="event-title">{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date} | {event.location}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <span className={`event-category ${event.category.toLowerCase()}`}>
                    {event.category}
                </span>
            </Card.Body>
        </Card>
    );
};
