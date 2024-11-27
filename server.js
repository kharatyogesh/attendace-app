const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // To use environment variables

const app = express();
app.use(express.json());
app.use(cors());

const studentRoutes = require('./routes/authRoutes'); // Import the routes

app.use('/api', studentRoutes); // Use the routes in the '/api' prefix

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((err) => console.error('Failed to connect to MongoDB:', err));
