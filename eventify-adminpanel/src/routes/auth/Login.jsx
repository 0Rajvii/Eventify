import React, { useState } from 'react'
import { loginUser } from '../../services/api.service';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setAccessToken, saveUserToLocalstorage } from '../../services/localstorage';
import "./Signup.css";

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
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

        loginUser(user)
            .then((response) => {
                const user = response;
                if (user) {
                    setAccessToken(user.token);
                    saveUserToLocalstorage(user);
                    navigate('/');
                }
                setMessage({ type: 'success', content: 'Signup successful!' });
            })
            .catch((error) => {
                console.log('error', error);
                setMessage({ type: 'error', content: 'nvalid Username/Password Combination' });
            });
    };
    return (
        <div>
            <section className="form-section login-form-section vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7 col-sm-9">
                            <div className="form-wrapper auth-form bg-light mt-2 p-3 rounded shadow">
                                <Form onSubmit={handleSubmit} className="px-4 py-3">
                                    <div className="logo-wrapper text-center mb-4">
                                        <img src="/images/eventify-logo.webp" alt="Logo" width={200} />
                                    </div>
                                    <h3 className="text-center">Log in to your account</h3>
                                    <hr />
                                    {message && (
                                        <Alert variant={message.type} className="mb-3">
                                            {message.content}
                                        </Alert>
                                    )}
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

                                    <Button className="btn-primary w-100 p-2 mt-3 text-center" type="submit">
                                        Login
                                    </Button>
                                    <p className="mt-4 account-link text-center">
                                        Don't have an account? <Link className="text-decoration-none" to="/auth/signup">Signup</Link>
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
