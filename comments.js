// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a variable to store the comments
let comments = [];

// Create a route to get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route to post comments
app.post('/comments', (req, res) => {
    const comment = req.query.comment;
    comments.push(comment);
    res.json({ status: 'success' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});