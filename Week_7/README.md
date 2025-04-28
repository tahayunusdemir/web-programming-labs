# Assessment Lab Node-02 - Energy Consumption

This project demonstrates a simple client-server integration using Node.js, Express, and vanilla JavaScript.

- The server (`server.js`) provides an API endpoint (`/api/consumption`) that returns mock energy consumption data for a customer.
- The client (`index.html` and `index.js`) fetches this data from the server and displays it on a web page.

## Setup and Running

1.  **Navigate to the `Week_7` directory:**
    ```bash
    cd Week_7
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the server:**
    ```bash
    node server.js
    ```
    The server will start listening on `http://localhost:3000`.

4.  **Open the client:**
    Open the `index.html` file directly in your web browser (e.g., by double-clicking it or using the "Open File" option in your browser).

The web page should display the energy consumption data fetched from the running server. 