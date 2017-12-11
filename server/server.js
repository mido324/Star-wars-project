const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const favorites = []

app.use(bodyParser.json());
app.use(cors());

// app.get('/api/test', (req, res) => {
//     res
//         .status(200)
//         .send('http://i63.tinypic.com/2j9y8p.png');
// })
app.post("/api/favorites", (req, res) => {
    favorites.push(req.body.name)
    console.log(favorites);
    res.status(200).json(favorites)
})
const port = 3003

app.listen(3003, () => {
    console.log(`I am listening on port ${port}`);
})