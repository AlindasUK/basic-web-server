$(document).ready(() => {
  const socket = io();

  // Handle button click on the client
  $('#pressButton').on('click', () => {
    // Get username and user input from the input fields
    const username = $('#usernameInput').val();
    const userInput = $('#userInput').val();

    // Emit a userMessage event to the server with the username and user's input
    socket.emit('userMessage', { username, message: userInput });

    // Clear the input fields after sending the message
    $('#userInput').val('');
  });

  // Listen for displayMessage event from the server
  socket.on('displayMessage', (data) => {
    // Append the received message with username to the message container
    $('#messageContainer').append(`<p>${data.username}: ${data.message}</p>`);
  });
});
