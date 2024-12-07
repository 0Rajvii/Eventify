import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { getEvents } from '../services/api.service';
import BookingForm from './BookingForm';
import { Modal, Button } from 'react-bootstrap';
import "./Model.css";
import "./EventList.css";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const result = await getEvents();
      console.log('events-------', events)
      setEvents(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getFilteredEvents = () => {
    if (!searchQuery) {
      return events;
    }
    return events.filter(event =>
      event.category && event.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredEvents = getFilteredEvents();

  const showBookingForm = (event) => {
    console.log('showModal----------------', event)
    setSelectedEvent(event);
    setShowForm(true);
  };

  const closeBookingForm = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };

  return (
    <div className="container mt-5 event-list-section">
      <div className="row justify-content-center mb-5">
        <div className="col-md-6 mt-3">
          <div className="input-group">
            <span className="input-group-text"><TbSearch size={25} /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Category....."
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className="row mb-5">
        {filteredEvents.map((event) => (
          <div className="col-md-4 mb-5" key={event._id}>
            <div className="card mx-auto">
              <Link to={`/events/${event._id}`} className="card-link text-decoration-none">
                <img
                  src={event.image}
                  className="card-img-top rounded-top latest-event-img"
                  alt={event.category}
                />
                <div className="card-body">
                  <h5 className="card-title no-decoration">{event.eventName}</h5>
                  <p className="card-text no-decoration">{event.eventDescription}</p>
                  <p className="card-text no-decoration">{event.category}</p>
                  <button className="btn-secondary event-button">
                    More Details
                  </button>
                </div>
              </Link>
              <button className="btn-primary book-now-button" onClick={() => showBookingForm(event)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="model-section">
        <Modal className="model-wrapper" show={showForm} onHide={closeBookingForm}>
          <Modal.Header className="model-header" closeButton>
            <Modal.Title>Booking for {selectedEvent?.eventName}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="model-body">
            {selectedEvent && (
              <BookingForm
                event={selectedEvent}
                onClose={closeBookingForm}
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeBookingForm}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </div>
  );
}