const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // You can change the port if you want

// Serve HTML files from the 'src/public' folder
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Serve CSS files from the 'src/style' folder
app.use('/style', express.static(path.join(__dirname, 'src', 'style')));

// Serve assets from the 'src/assets' folder
app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
