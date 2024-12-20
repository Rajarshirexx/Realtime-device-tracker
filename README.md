# Real-time Location Sharing with Socket.io and Leaflet

This project allows users to share and view each other's real-time geographic locations on a map. Built with **Node.js**, **Express**, **Socket.io**, and **Leaflet**, this application enables communication between multiple users connected to the same server. The user’s location is tracked using the browser's built-in **Geolocation API** and displayed on a map using **Leaflet.js**.

## Features
- **Real-time location sharing**: Updates are broadcasted to all connected clients, ensuring everyone sees the latest location.
- **Interactive map**: Displays user markers with **Leaflet.js**.
- **Responsive**: Works on desktop and mobile browsers.
- **User disconnection handling**: When a user disconnects, their marker is removed from the map for other users.

## Installation

To run the project locally:

### 1. Clone the repository:
```bash
git clone https://github.com/Rajarshirexx/Realtime-device-tracker.git
cd Realtime-device-tracker
2. Install dependencies:
bash
Copy code
npm install
3. Start the server:
bash
Copy code
node app.js
4. Open your browser:
Visit http://localhost:3000 to see the application in action.

Usage:

Geolocation: The app uses the browser's geolocation API to get and share your current location.
Interactive Map: Users' locations are shown on an interactive map powered by Leaflet.js.
Multiple Clients: Open multiple tabs or use different devices on the same network to see real-time location updates.
On your phone:
Ensure your phone is connected to the same network as the computer running the server.
Access the app by navigating to http://<server_IP>:3000 in your mobile browser.
Your location will be tracked and shown on the map along with other users.
Technologies Used
Node.js: The server-side runtime environment.
Express.js: Web framework for building the server.
Socket.io: For enabling real-time bidirectional communication between the client and server.
Leaflet.js: For rendering interactive maps.
Geolocation API: To fetch users' geographical locations from the browser.
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit pull requests. Here are a few ways you can contribute:

Report bugs and issues.
Add new features or improve existing functionality.
Enhance documentation.

License:
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements:

Leaflet.js: Open-source JavaScript library for interactive maps.
Socket.io: Real-time web socket framework for event-driven communication.