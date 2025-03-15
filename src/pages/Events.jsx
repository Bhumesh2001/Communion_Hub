import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../components/EventCard";
import Filter from "../components/Filter";

export default function Events() {
    const defaultEvents = [
        {
            title: "Charity Drive",
            date: "2025-03-10",
            category: "Charity",
            location: "New York",
            description: "Join us for a charity event to support the needy."
        },
        {
            title: "Community Gathering",
            date: "2025-03-15",
            category: "Social",
            location: "Los Angeles",
            description: "A social meetup for community engagement."
        },
        {
            title: "Cultural Exchange Night",
            date: "2025-04-05",
            category: "Religious",
            location: "Chicago",
            description: "An evening of cultural performances and networking."
        },
        {
            title: "Volunteer Meetup",
            date: "2025-04-20",
            category: "Charity",
            location: "San Francisco",
            description: "Meet volunteers and plan upcoming charity initiatives."
        }
    ];

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    
        // ✅ Remove duplicates based on `title`
        const mergedEvents = [...storedEvents, ...defaultEvents];
        const uniqueEvents = Array.from(new Map(mergedEvents.map(event => [event.title, event])).values());
    
        setEvents(uniqueEvents);
        localStorage.setItem("events", JSON.stringify(uniqueEvents));
    }, []);
    

    const [filter, setFilter] = useState("All");
    const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

    return (
        <Container className="events-page my-5">
            <h2 className="text-center mb-4">🎉 Upcoming Events</h2>

            <Filter setFilter={setFilter} /> {/* ✅ Correct component usage */}

            <Row>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <Col md={6} key={index}>
                            <EventCard event={event} />
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No events available for this category.</p>
                )}
            </Row>
        </Container>
    );
};
