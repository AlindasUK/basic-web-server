const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle button click on the server
app.get('/button-click', (req, res) => {
  const startTime = new Date();

  // Simulate some processing time (you can replace this with your actual processing logic)
  setTimeout(() => {
    const endTime = new Date();
    const duration = endTime - startTime;

    console.log('Button Pressed on the Server!');
    console.log(`Processing time: ${duration} milliseconds`);

    res.send(`Button Pressed on the Server! Processing time: ${duration} milliseconds`);
  }); // Simulating 1 second of processing time
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
