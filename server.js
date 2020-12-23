const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const connections = [];
const connectedUsers = [];

io.on('connection', (socket) => { 
    socket.on("userConnected", (payload) => {
        connectedUsers.push(payload);
        io.emit("userConnected", {
            username: payload,
            connectedUsers: connectedUsers
        });

        socket.on("disconnect", () => {
            connectedUsers.splice(connectedUsers.indexOf(payload), 1);
            connections.splice(connections.indexOf(socket), 1);
            io.emit("connectedUsersCounter", connections.length);
            io.emit("userDisconnected", {
                username: payload,
                connectedUsers: connectedUsers
            });
        });
    })

    socket.on("startCounter", () => {
        connections.push(socket);
        io.emit("connectedUsersCounter", connections.length);
    })

    socket.on("startDrawing", (payload) => {
        socket.broadcast.emit("startDrawing", payload);
    })

    socket.on("draw", (payload) => {
        socket.broadcast.emit("draw", payload);
    })

    socket.on("stopDrawing", () => {
        socket.broadcast.emit("stopDrawing");
    })

    socket.on("resetPath", () => {
        socket.broadcast.emit("resetPath");
    });

    socket.on("clearCanvas", () => {
        socket.broadcast.emit("clearCanvas");
    })

    socket.on("newMsg", (payload) => {
        io.emit("newMsg", payload);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});