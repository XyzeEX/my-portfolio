const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // You can change the port if you want

// Serve HTML files from the 'src/public' folder
app.use(express.static(path.join(__dirname)));

// Serve assets from the 'src/assets' folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
