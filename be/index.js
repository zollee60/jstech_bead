const express = require('express');
const Base64Service = require('./base64-service.js')
const cors = require('cors');

const app = express();

app.use(express.json());
const corsOptions = {
    origin: "*", // Or pass origins you want
    credentials: true
};
app.use(cors(corsOptions));

app.post('/encode', (req, res) => {
    const { stringToEncode } = req.body;
    const encodedString = Base64Service.encode(stringToEncode);
    res.send(encodedString);
});

app.post('/decode', (req, res) => {
    const { stringToDecode } = req.body;
    const decodedString = Base64Service.decode(stringToDecode);
    res.send(decodedString);
});

app.listen(3000);