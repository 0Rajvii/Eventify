import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleUser } from '../services/api.service';
import { Card, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventInfo.css";

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchSingleUser = async () => {
            try {
                const result = await getSingleUser(userId);
                console.log('Fetched Single User:', result);
                setUser(result);
            } catch (error) {
                console.error('Error setting user:', error);
            }
        };

        fetchSingleUser();
    }, [userId]);

    return (
        <div className="container my-5">
            <Card className="event-info-section custom-card">
                <Card.Header>User Info</Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive="sm">
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td>{user?.name || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td>{user?.email || "N/A"}</td>
                            </tr>
                            <tr>
                                <td><strong>Created At</strong></td>
                                <td>{user?.createdAt || "N/A"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfile;