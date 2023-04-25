const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors({
    origin: '*'
}));

// urlencoded -> parses data that comes from HTML forms
// extended: true -> allows to post nested objects
app.use(bodyParser.urlencoded({ extended: true }));

// handling GET request to users
app.get('/users', cors(), (req, res) => {
    res.sendFile(__dirname + '/list-users.json');
});

// handling GET request to posts
app.get('/posts', cors(), (req, res) => {    
    res.sendFile(__dirname + '/list-posts.json');
});

// listens with a callback function
app.listen(9000, () => {
    console.log('Server started on port 9000');
});