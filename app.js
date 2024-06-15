const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Import routes
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
