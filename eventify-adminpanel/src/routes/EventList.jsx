import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbTrash, TbEdit, TbPlus, TbSearch } from 'react-icons/tb';
import { Container, Button, Form, Modal, Table, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { createEvent, deleteEvent, updateEvent, getEvents } from '../services/api.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "./MainEvent.css";

export default function EventList() {
    const [events, setEvents] = useState([]);
    const [totalEvents, setTotalEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [currenteventId, setCurrenteventId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [formValues, setFormValues] = useState({
        eventName: '',
        eventDescription: '',
        eventDate: '',
        eventLocation: '',
        category: '',
        image: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleCategoryChange = (eventKey) => {
        setFormValues({
            ...formValues,
            category: eventKey,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormValues({ ...formValues, image: reader.result });
            };
            reader.readAsDataURL(file); // This converts the file to a base64 string
        }
    };

    const fetchEvents = async () => {
        try {
            const result = await getEvents();
            console.log('result', result);
            setEvents(result);
            setTotalEvents(result.length);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    const showModal = (event) => {
        console.log('showModal----------------', event)
        if (event) {
            setIsUpdateMode(true);
            setCurrenteventId(event._id);
            setFormValues(event);
        } else {
            setIsUpdateMode(false);
            setFormValues({
                eventName: '',
                eventDescription: '',
                eventDate: '',
                eventLocation: '',
                category: '',
                image: ''
            });
        }
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setCurrenteventId(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const getFilteredEvents = () => {
        if (!searchQuery) {
            return events;
        }
        return events.filter((event) =>
            event.category && event.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const handleDeleteEvent = (id) => {
        deleteEvent(id)
            .then(({ data: result }) => {
                const event = result;
                console.log('Deleted event:', event);
                fetchEvents();
            })
            .catch((error) => {
                console.log('Error deleting event:', error);
            });
    };

    const handleCreateOrUpdateUser = async (event) => {
        event.preventDefault();
        try {
            if (isUpdateMode) {
                await updateEvent(currenteventId, formValues);
            } else {
                await createEvent(formValues);
            }
            hideModal();
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        const columns = ["Event Name", "Event Description", "Event Date", "Event Location", "Category", "Date Created"];
        const rows = events.map(event => [
            event.eventName,
            event.eventDescription,
            event.eventDate,
            event.eventLocation,
            event.category,
            event.createdAt
        ]);
        doc.autoTable({
            head: [columns],
            body: rows,
        });

        doc.save('events.pdf');
    };

    return (
        <Container>
            <div className="event-list-section p-3">
                <div className="row">
                    <div className="col-md-12">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                <div className="row mb-3">
                                    <div className="col-md-8">
                                        <h3 className="gradient-text">Total List of Events: {totalEvents}</h3>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end align-items-center">
                                        <div className="dashboard-actions">
                                            <Button className="mx-3 justify-content-end event-button" variant="primary" onClick={() => showModal(null)}>
                                                <TbPlus /> New Event
                                            </Button>
                                            <Button className="text-end" variant="success" onClick={downloadPDF}>
                                                Download PDF
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-5">
                                    <div className="col-md-6 mt-3">
                                        <div className="input-group">
                                            <span className="input-group-text"><TbSearch size={25} /></span>
                                            <input type="text" className="form-control" placeholder="Search Category....." onChange={handleSearchChange} />
                                        </div>
                                    </div>
                                </div>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Event Name</th>
                                            <th>Event Description</th>
                                            <th>Event Date</th>
                                            <th>Event Location</th>
                                            <th>Event Category</th>
                                            <th>Date Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredEvents().map(event => (
                                            <tr key={event._id}>
                                                <td><Link to={`/events/${event._id}`}>{event.eventName}</Link></td>
                                                <td>{event.eventDescription}</td>
                                                <td>{event.eventDate}</td>
                                                <td>{event.eventLocation}</td>
                                                <td>{event.category}</td>
                                                <td>{event.createdAt}</td>
                                                <td>
                                                    <Button variant="danger" size="sm" className="mx-2" onClick={() => handleDeleteEvent(event._id)}>
                                                        <TbTrash />
                                                    </Button>
                                                    <Button variant="secondary" size="sm" onClick={() => showModal(event)}>
                                                        <TbEdit />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="form-wrapper auth-form">
                                            <Modal className="model-wrapper"
                                                show={isModalVisible}
                                                onHide={hideModal}
                                                backdrop="static"
                                                keyboard={false}
                                            >
                                                <Form onSubmit={handleCreateOrUpdateUser}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>{isUpdateMode ? "Update Event" : "Create Event"}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Event Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter event name"
                                                                name="eventName"
                                                                value={formValues.eventName}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Event Description</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                placeholder="Enter event description"
                                                                name="eventDescription"
                                                                value={formValues.eventDescription}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Event Date</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                name="eventDate"
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Event Location</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter event location"
                                                                name="eventLocation"
                                                                value={formValues.eventLocation}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Profile Image</Form.Label>
                                                            <Form.Control
                                                                type="file"
                                                                onChange={handleFileChange}
                                                                required={!isUpdateMode}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label></Form.Label>
                                                            <DropdownButton
                                                                id="dropdown-basic-button"
                                                                title={formValues.category || "Select Category"}
                                                                onSelect={handleCategoryChange}
                                                                className="w-100"
                                                            >
                                                                <Dropdown.Item eventKey="education">Education</Dropdown.Item>
                                                                <Dropdown.Item eventKey="music">Music</Dropdown.Item>
                                                                <Dropdown.Item eventKey="business">Business</Dropdown.Item>
                                                                <Dropdown.Item eventKey="sports">Sports</Dropdown.Item>
                                                                <Dropdown.Item eventKey="arts">Arts</Dropdown.Item>
                                                            </DropdownButton>
                                                        </Form.Group>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={hideModal}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" type="submit">
                                                            {isUpdateMode ? "Update Event" : "Create Event"}
                                                        </Button>
                                                    </Modal.Footer>
                                                </Form>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}