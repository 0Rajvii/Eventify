import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Signup from './routes/auth/Signup';
import Login from './routes/auth/Login';
import EventList from './routes/EventList';
import EventProfile from './routes/EventProfile';
import Home from './routes/Home';
import ContactUs from './routes/ContactUs';
import AboutUs from './routes/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Feedback from './routes/Feedback';
import Thankyou from './routes/Thankyou';
import LatestEvent from './routes/LatestEvent';
import UpcomingEvent from './routes/UpcomingEvent';
import UserProfile from './routes/UserProfile';
import { getAccessToken, getUserFromLocalstorage } from './services/localstorage';
import MainLayout from './components/layouts/MainLayout';
import BookingForm from './routes/BookingForm';
import PrivacyPolicy from './routes/PrivacyPolicy';
import RefundPolicy from './routes/RefundPolicy';
import TermsOfUse from './routes/TermsOfUse';

function App() {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = getAccessToken();
    const userData = getUserFromLocalstorage();

    if (token && userData) {
      setUser(userData);
    }
    setUserLoaded(true);
  }, []);

  const authRoutes = ['/auth/login', '/auth/signup'];

  return (
    <div className="app">
      {!authRoutes.includes(location.pathname) && (
        <div className="nav-section">
          <Navbar />
        </div>
      )}

      {userLoaded ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:eventId" element={<EventProfile />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/bookings" element={<BookingForm />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route path="/latest" element={<LatestEvent />} />
            <Route path="/upcoming-events" element={<UpcomingEvent />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      ) : (
        <div>Loading...</div>
      )}

      {!authRoutes.includes(location.pathname) && (
        <div className="footer-section">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;