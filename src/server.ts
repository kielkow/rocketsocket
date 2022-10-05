import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);

const io = new Server(server);

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello Websocket App',
    });
});

server.listen(3000, () => console.log('server is running on port 3000'));
