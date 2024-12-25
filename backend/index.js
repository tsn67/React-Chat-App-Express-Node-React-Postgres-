import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import cors from 'cors';

const app = express();
const port = process.env.port || 3000;

const corsOptions = {
    origin: '*',  //allwoing all domains
    methods: ['GET', 'POST'], //type of http methods supported
    allowedHeaders: ['Content-Type'], //not necessary
};

app.use(cors(corsOptions));

const server = http.createServer(app);
const io = new socketIo(server, {
    cors: {
      origin: '*', // Allow all origins
      methods: ['GET', 'POST'],
    },
});

server.listen(port, ()=> {
    console.log("server started at port:"+port);
})