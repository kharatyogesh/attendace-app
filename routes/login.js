const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const router = express.Router();
const JWT_SECRET = 'your_secret_key';  // Store this in an environment variable in production

// Student Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find student by email
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ studentId: student._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
