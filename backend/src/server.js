import Database from "./database";

const path = require('path');
const express = require('express');
const cors = require('cors'); // ADDED
const bodyParser = require('body-parser'); // ADDED
const bcrypt = require("bcrypt");

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('../../frontend/build'));
}
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 5000;

app.use(cors()); // ADDED

app.use(express.json());

// app.use(bodyParser.json()); // ADDED

// app.use(bodyParser.urlencoded({extended: true })); // ADDED

// app.use(express.static(publicPath));

app.post("/users", async (req, res) => {
   try {
     req.body.password = await bcrypt.hash(req.body.password, 10);
     const result = await Database.newUser(req.body);
     console.log(result);
     res.json(result);
   } catch (error) {
     res.body = "Error: " + error;
   }
 });

app.listen(port, () => {
   console.log('Server is up!');
});