import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import EventList from './routes/EventList';
import EventProfile from './routes/EventProfile';
import UserProfile from './routes/UserProfile';
import Dashboard from './routes/Dashboard';
import MainLayout from './components/layouts/MainLayout';
import Contact from './routes/Contact';
import Booking from './routes/Booking';
import ContactDetails from './routes/ContactDetails';
import Feedback from './routes/Feedback';
import FeedbackDetails from './routes/FeedbackDetails';
import Signup from './routes/auth/Signup';
import Login from './routes/auth/Login';
import { getAccessToken, getUserFromLocalstorage } from './services/localstorage';
import BookingDetails from './routes/BookingDetails';


function App() {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    const userData = getUserFromLocalstorage();
    if (token && userData) {
      setUser(userData);
    }
    setUserLoaded(true);
  }, []);



  return (
    <div className="app">
      {userLoaded ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/event-lists" element={<EventList />} />
            <Route path="/events/:eventId" element={<EventProfile />} />
            <Route path="/users/:userId" element={<UserProfile />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/event-bookings" element={<Booking />} />
            <Route path="/event-bookings/:bookingId" element={<BookingDetails />} />
            <Route path="/contacts/:contactId" element={<ContactDetails />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/feedback/:feedbackId" element={<FeedbackDetails />} />
          </Route>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;


