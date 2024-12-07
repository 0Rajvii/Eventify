import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { getUpcomingFeaturedEvents } from '../services/api.service';

import LatestEvent from './LatestEvent';
import UpcomingEvent from './UpcomingEvent';

const Home = () => {
    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            try {
                const result = await getUpcomingFeaturedEvents();
                console.log('result', result);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUpcomingEvents();
    }, []);
    return (
        <div className="home-section">
            <div className="home-header">
                <div className="home mx-auto text-center">
                    <h1 className="text-capitalize fw-bold mb-3">
                        Welcome to Eventify
                    </h1>
                    <p className="home-lead max-w-25">
                        At Eventify, we transform your event dreams into reality. Whether you’re planning a corporate gala, a wedding, a birthday bash, or any special occasion, we are here to ensure a seamless and stress-free process
                    </p>
                    <button className="home-button-link">
                        <Link to={"/about-us"} className="text-decoration-none home-link">
                            About Us
                        </Link>
                    </button>

                </div>
            </div>
            <div className="container upcoming-event-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mx-5 text-center">

                            <div className="row mb-5 text-center">
                                <LatestEvent />
                            </div>

                            <div className="row mt-5 mb-5 text-center">
                                <UpcomingEvent />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;