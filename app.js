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

  // Handle userMessage event from the client
  socket.on('userMessage', (data) => {
    // Broadcast the user's message with username to all connected clients
    io.emit('displayMessage', { username: data.username, message: data.message });
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
