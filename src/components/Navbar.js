import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <h2>Welcome to the Attendance App</h2>
            <p>Select your role to login:</p>
            <ul>
                <li><Link to="/login/student">Login as Student</Link></li>
                <li><Link to="/login/teacher">Login as Teacher</Link></li>
                <li><Link to="/login/admin">Login as Admin</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;
