const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => { 
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
});

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});