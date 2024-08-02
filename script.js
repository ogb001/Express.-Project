const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});