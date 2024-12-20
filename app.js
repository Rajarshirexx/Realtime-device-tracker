const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

let users = {}; // Store user locations keyed by socket.id

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    
    // Send the current list of users and their locations to the new client
    socket.emit("initial-locations", users);

    socket.on("send-location", (data) => {
        users[socket.id] = data; // Update user location
        io.emit("receive-location", { id: socket.id, ...data }); // Broadcast to all
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
        delete users[socket.id]; // Remove user from the list
        io.emit("user-disconnected", socket.id); // Notify others
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
