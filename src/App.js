// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Attendance App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/student-login">Student Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teacher-login">Teacher Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin-login">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="text-center mt-5">Welcome to the Attendance App!</h1>} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}
export default App;
