// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// Create a comments array
let comments = [
  { name: 'Stefan', message: 'Hello there!' },
  { name: 'John', message: 'How are you?' }
];
// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
// Set the views folder
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the public folder
app.use(express.static(path.join(__dirname, 'public')));
// Get the comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});
// Post the comments
app.post('/comments', (req, res) => {
  comments.push({ name: req.body.name, message: req.body.message });
  res.redirect('/comments');
});
// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});