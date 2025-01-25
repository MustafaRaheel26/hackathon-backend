const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load .env file

const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);

// Default Route for Testing
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
