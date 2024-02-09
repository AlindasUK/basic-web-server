const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle buttonClick event from the client
  socket.on('buttonClick', () => {
    // Make a request to the server when the button is clicked
    const startTime = new Date();

    // Simulate some processing time (you can replace this with your actual processing logic)
    setTimeout(() => {
      const endTime = new Date();
      const duration = endTime - startTime;

      console.log('Button Pressed on the Server!');
      console.log(`Processing time: ${duration} milliseconds`);

      // Broadcast the processing time to all connected clients
      io.emit('buttonPressed', `Button Pressed! Processing time: ${duration} milliseconds`);
    }, );
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
