//Add dotenv
require('dotenv').config()
// Load express
const express = require('express');
const mongoose = require('mongoose');

const log = require('./models/logs')
const methodOverride = require('method-override')

const port = 3000
// Create our express app
const app = express();

//... and then farther down the file
mongoose.set("strictQuery", false); //THis line is to avoid warnings
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


// Middleware...
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine())

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    res.send('<h1>Welcome to the captian log App!</h1>');
});

const logsController = require('./controllers/logs')
app.use('/logs', logsController)

app.listen(port, function () {
    console.log('Listening on port 3000');
});