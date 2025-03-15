import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import WhyCommunion from "../components/Communion";
import JoinConversation from "../components/Conversation";
import UnitingCommunities from "../components/UnityCommunity";
import DailyEngagements from "../components/Engagement";
import MomentsOfConnection from "../components/Moments";

export default function Home() {
    return (
        <>
            <div className="home-page">
                <div className="overlay"></div> {/* Background Overlay for better readability */}
                <Container className="text-center home-content">
                    <h1 className="display-3 fw-bold">Connecting People Across Faiths & Interests</h1>
                    <p className="lead">Bringing communities together through meaningful events and support.</p>
                    <Link to="/events">
                        <Button variant="primary" size="lg" className="explore-btn">
                            Explore Events
                        </Button>
                    </Link>
                </Container>
            </div>
            <WhyCommunion />
            <JoinConversation />
            <UnitingCommunities />
            <DailyEngagements />
            <MomentsOfConnection />
        </>
    );
};
