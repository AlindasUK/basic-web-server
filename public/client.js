document.getElementById('pressButton').addEventListener('click', () => {
    $.get('/button-click', function(data) {
      document.getElementById('outputMessage').innerText = data;
    });
  });
  