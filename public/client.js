$(document).ready(() => {
  const socket = io();

  // Listen for buttonPressed event from the server
  socket.on('buttonPressed', (message) => {
    $('#outputMessage').text(message);
  });

  // Handle button click on the client
  $('#pressButton').on('click', () => {
    // Emit a buttonClick event to the server using Socket.io
    socket.emit('buttonClick');
  });
});
