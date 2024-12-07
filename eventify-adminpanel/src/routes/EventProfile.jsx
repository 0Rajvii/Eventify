import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventsById } from '../services/api.service';
import { Card, Table } from 'react-bootstrap';
import "./EventInfo.css";

const EventProfile = () => {
    const params = useParams();
    const eventId = params.eventId;
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchSingleEvent = async () => {
            try {
                const result = await getEventsById(eventId);
                console.log(result);
                setEvent(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSingleEvent();
    }, [eventId]);

    return (
        <div className="p-5">
            <Card className="event-info-section custom-card">
                <Card.Header>Event info</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><strong>Event Name</strong></td>
                                <td>{event?.eventName}</td>
                            </tr>
                            <tr>
                                <td><strong>Event Description</strong></td>
                                <td>{event?.eventDescription}</td>
                            </tr>
                            <tr>
                                <td><strong>Event Date</strong></td>
                                <td>{event?.eventDate}</td>
                            </tr>
                            <tr>
                                <td><strong>Event Location</strong></td>
                                <td>{event?.eventLocation}</td>
                            </tr>
                            <tr>
                                <td><strong>Event Category</strong></td>
                                <td>{event?.category}</td>
                            </tr>
                            <tr>
                                <td><strong>Created At</strong></td>
                                <td>{event?.createdAt}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EventProfile;