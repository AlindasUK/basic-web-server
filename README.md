# Button Press Example

This is a simple example project demonstrating how to create a web page with a button that, when pressed, triggers an action on the server and displays the processing time.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-project
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

    The server will start running at http://localhost:3000.

5. **Open your web browser:**

    Visit [http://localhost:3000](http://localhost:3000) in your web browser to see the button press example.

## Project Structure

- **`public/`**: Contains static files served by the server.
  - `index.html`: Main HTML file with the button and script references.
  - `client.js`: Client-side JavaScript file handling button click events.
  - `styles.css`: External CSS file for styling.

- **`server.js`**: Server-side JavaScript file responsible for serving files and handling server-side logic.

- **`package.json`**: Configuration file for the Node.js project.

## Additional Notes

- Adjust the processing time in the `server.js` file according to your actual processing logic.
- Customize the styles in the `styles.css` file to match your preferences.
- Feel free to replace the simulated processing time with your actual server-side logic in the `/button-click` route.

