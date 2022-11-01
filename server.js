// open libraries
const express = require("express");
const path = require("path");

// init library code for web-server
const app = express();

// settings
const port = 3000;

app.use(express.static("public"));

app.get('/api/result', function(req, res) {
  res.json({ name: "John", age: 15});
});

app.listen(port, () => {
  console.log(`Server started  127.0.0.1:${port}`);
})
