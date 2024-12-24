import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import { createServer } from 'http';
import { Server } from 'socket.io';
import socketOnConnect from './controllers/socket-controller.js';

import artworksRoutes from './routes/artworks.js';
import auctionRoutes from './routes/auction.js';
import bidRoutes from './routes/bid.js';
import userRoutes from './routes/user.js';

const PORT = process.env.PORT || 8080;
const CLIENT_PORT = process.env.CLIENT_PORT || 5173;
const corsOptions = { origin: `http://localhost:${CLIENT_PORT}` }


const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: corsOptions
});


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));


app.use("/api/artworks", artworksRoutes);
app.use("/api/auction", auctionRoutes);
app.use("/api/bid", bidRoutes);
app.use("/api/user", userRoutes);


socketOnConnect(io);


httpServer.listen(PORT, () => {
    console.log(`Running Magnum Opus API on http://localhost:${PORT}...\n`);
});
