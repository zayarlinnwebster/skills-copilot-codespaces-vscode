// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Array to store comments
let comments = [
    {
        id: 1,
        name: "John Doe",
        comment: "Hello World"
    },
    {
        id: 2,
        name: "Jane Doe",
        comment: "Hi"
    }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    const id = comments.length + 1;
    comment.id = id;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});