import { Form } from "react-bootstrap";

export default function Filter({ setFilter }) {
    return (
        <Form.Select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown mb-4">
            <option value="All">All Events</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
        </Form.Select>
    );
}
