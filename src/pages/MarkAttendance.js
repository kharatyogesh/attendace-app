import React from 'react';

function MarkAttendance() {
    const handleAttendance = () => {
        console.log('Attendance Marked');
    };

    return (
        <div className="container">
            <h2>Mark Attendance</h2>
            <button className="btn btn-primary" onClick={handleAttendance}>
                Mark Attendance
            </button>
        </div>
    );
}

export default MarkAttendance;
