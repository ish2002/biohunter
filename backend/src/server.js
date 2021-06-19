
const path = require('path');
const express = require('express');
const cors = require('cors'); // ADDED
const bodyParser = require('body-parser'); // ADDED


const app = express();

const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 5000;

app.use(cors()); // ADDED

app.use(bodyParser.json()); // ADDED

app.use(bodyParser.urlencoded({extended: true })); // ADDED

app.use(express.static(publicPath));

// cd src && yarn start
// yarn add
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up!');
});