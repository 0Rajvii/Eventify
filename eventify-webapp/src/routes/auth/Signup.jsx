import React, { useState } from 'react'
import { signupApi } from '../../services/api.service';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setAccessToken, saveUserToLocalstorage } from '../../services/localstorage';
import "./Signup.css";

export default function Signup() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        signupApi(user)
            .then((response) => {
                const user = response;
                console.log('user---------', user)
                if (user) {
                    setAccessToken(user.token);
                    saveUserToLocalstorage(user);
                    navigate('/');
                }
                setMessage({ type: 'success', content: 'Signup successful!' });
            })
            .catch((error) => {
                console.log('error', error);
                setMessage({ type: 'error', content: 'Email address is already registered with us.' });
            });
    };
    return (
        <div>
            <section className="form-section">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="form-wrapper auth-form bg-light p-3">
                                <Form onSubmit={handleSubmit} className="p-4">
                                    <div className="logo-wrapper text-center">
                                        <img src="/images/eventify-logo.webp" alt="Logo" width={200} />
                                    </div>
                                    <h3 className="text-center">Create a new Account</h3>
                                    <hr />
                                    {message && (
                                        <Alert variant={message.type} className="mb-3">
                                            {message.content}
                                        </Alert>
                                    )}

                                    <Form.Group controlId="name" className="mt-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="abc"
                                            required
                                            value={user.name}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="email" className="mt-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="abc@gmail.com"
                                            required
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="password" className="mt-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="*******"
                                            required
                                            minLength={6}
                                            value={user.password}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="phone" className="mt-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="1234567890"
                                            required
                                            pattern="[0-9]{10}"
                                            value={user.phone}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Button className="btn-primary w-100 p-2 mt-3" type="submit">
                                        Create Account
                                    </Button>
                                    <p className="account-link mt-4">
                                        Already have an account? <Link className="text-decoration-none" to="/auth/login">Login</Link>
                                    </p>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
