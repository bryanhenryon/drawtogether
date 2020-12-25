const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const sanitizeHtml = require('sanitize-html');

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const connections = [];
const connectedUsers = [];

io.on('connection', (socket) => { 
    socket.on("userConnected", (payload) => {
        const generateColor = () => {
            const colors = [
              "#FF6464",
              "#6ED3FF",
              "#70DE8A",
              "#FFD675",
              "#AE56E8",
              "#F674FF",
              "#00FFEE",
              "#FFFF00",
              "#F0A6B4",
              "#FFA500"
            ];
            const randomColor = Math.floor(Math.random() * Math.floor(colors.length));
            return colors[randomColor];
          }

        connectedUsers.push({
            user: payload, 
            color: generateColor()
        });
        
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

        const sanitizedMsg = sanitizeHtml(payload.body, {
            disallowedTagsMode: 'escape',
            allowedTags: [],
            allowedAttributes: false,
            allowedIframeHostnames: []
          });

        const user = connectedUsers.find(user => user.user === payload.author);

        io.emit("newMsg", {
            author: payload.author,
            body: sanitizedMsg,
            color: user.color
        });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});