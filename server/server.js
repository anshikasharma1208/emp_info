const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./utils/db'); // Import the DB connection
const employeeRoutes = require('./routes/employeeRoutes');

// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to database and start server
connectDb().then(() => {
  const PORT = process.env.PORT || 5000;

  app.get('/', (req, res) => {
    res.send('Welcome to the Employee Information System!');
  });

  app.use('/employees', employeeRoutes); // Ensure this route is correctly registered

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
