
const path = require('path');
const express = require('express');
const cors = require('cors'); // ADDED
const bodyParser = require('body-parser'); // ADDED

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('../../frontend/build'));
}
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 5000;

app.use(cors()); // ADDED

app.use(bodyParser.json()); // ADDED

app.use(bodyParser.urlencoded({extended: true })); // ADDED

// app.use(express.static(publicPath));

app.get("*", (req, res) => {
   res.sendFile(path.resolve('../../frontend/build/index.html'));
})

app.listen(port, () => {
   console.log('Server is up!');
});