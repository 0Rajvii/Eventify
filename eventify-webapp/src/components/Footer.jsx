import React from "react";
import "./footer.css";

const Footer = () => {

  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-12 mb-4 mb-md-0">
                <div className="logo">
                  <img src="/images/eventify-logo.webp" />
                </div>
                <h4 className="mt-4">
                  Get In Touch
                </h4>
                <div className="social-links">
                  <a href="">
                    <img src="/images/insta.jpeg" className="img-fluid social-icon" alt="Instagram" />
                  </a>
                  <a href="">
                    <img src="/images/linkedin.png" className="img-fluid social-icon mx-3" alt="Instagram" />
                  </a>
                  <a href="">
                    <img src="/images/facebook.webp" className="img-fluid social-icon" alt="Facebook" />
                  </a>
                </div>
              </div>
              <div className="col-md-2 offset-md-1 offset-0 col-6">
                <div className="footer-links-section">
                  <h4>COMPANY</h4>
                  <ul>
                    <li>
                      <a href="/about-us">About</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms-of-use">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/refund-policy">Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-6 mt-4 mt-md-0">
                <div className="footer-links-section">
                  <h4>RESOURCES</h4>
                  <ul>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/auth/signup">Signup</a>
                    </li>
                    <li>
                      <a href="/feedback">Feedback</a>
                    </li>
                    <li>
                      <a href="/user-profile">User Profile</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-6 mt-4 mt-md-0">
                <div className="footer-links-section">
                  <h4>WORKING HOURS</h4>
                  <ul>
                    <a href="#">
                      <li className="working-hours">
                        Monday - Friday
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                    </a>
                    <a href="#">
                      <li className="working-hours">
                        Saturday
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                    </a>
                    <a href="#">
                      <li className="working-hours">
                        Sunday
                        <span>Closed</span>
                      </li>
                    </a>
                  </ul>
                </div>

              </div>
              <div className="col-md-2 col-6">
                <div className="footer-links-section">
                  <h4>Contact Information</h4>
                  <ul>
                    <li>
                      <a href="eventify@gmail.com">eventify@gmail.com</a>
                    </li>
                    <li>
                      <a href="tel:+1234567890">+1 234 567 890</a>
                    </li>
                    <li>
                      <a href="#">
                        105 Onward Avenue, Kitchiner, Canada
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer text-center">
          &copy; 2024 Eventify. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
