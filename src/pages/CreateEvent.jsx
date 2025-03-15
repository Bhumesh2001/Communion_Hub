import { useState } from "react";
import EventForm from "../components/EventForm";

export default function CreateEvent() {
    const [events, setEvents] = useState([]);

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <div className="container my-5">
            <EventForm onAddEvent={handleAddEvent} />
        </div>
    );
};
