import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.get('/artworks', (req, res) => {
//     const data = JSON.parse(fs.readFileSync(DATA_PATH));

//     data.forEach((artwork) => {
//         artwork.alt_text = artwork.thumbnail?.alt_text ?? null;
//         delete artwork.thumbnail;
//     })

//     res.status(200).json(data);
// })

app.use("/api/artworks", artworksRoutes);
app.use("/api/auction", auctionRoutes);
app.use("/api/bid", bidRoutes);
app.use("/api/user", userRoutes);


app.listen(PORT, () => {
    console.log(`Running Magnum Opus API on http://localhost:${PORT}...`);
});