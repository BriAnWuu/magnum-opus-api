import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import artworksRoutes from './routes/artworks.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.use("/api/artworks", artworksRoutes);
// app.use("/api/auction", auctionRoutes);
// app.use("/api/bid", bidRoutes);
// app.use("/api/user", userRoutes);


app.listen(PORT, () => {
    console.log(`Running Magnum Opus API on http://localhost:${PORT}...`);
});