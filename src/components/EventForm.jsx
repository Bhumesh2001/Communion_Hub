import { useState } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";

export default function EventForm({ onAddEvent }) {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        category: "Social",
        location: "",
        description: ""
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Get existing events from localStorage
        const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    
        // Add new event
        const updatedEvents = [...existingEvents, formData];
    
        // Save updated events back to localStorage
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    
        // Update the parent state
        onAddEvent(updatedEvents);
    
        // Show success modal
        setShowModal(true);
    
        // Reset form
        setFormData({ title: "", date: "", category: "Social", location: "", description: "" });
    };
    
    return (
        <>
            <Card className="event-form-card p-4 my-4">
                <h3 className="text-center mb-3">🎉 Add New Event</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter event title"
                            className="custom-input"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="custom-input"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="custom-input"
                        >
                            <option value="Religious">Religious</option>
                            <option value="Social">Social</option>
                            <option value="Charity">Charity</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter event location"
                            className="custom-input"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter event description"
                            className="custom-input"
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="success" className="w-100 submit-btn">
                        Add Event
                    </Button>
                </Form>
            </Card>

            {/* Modal Notification */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Event Added 🎉</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`Event has been successfully added!`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
