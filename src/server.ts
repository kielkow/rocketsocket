import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello Websocket App',
    });
});

app.listen(3000, () => console.log('server is running on port 3000'));
