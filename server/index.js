const path = require("path");
const express = require("express");
const app = express(); // create express app
const PORT = process.env.port || 5000;

const cache = { data: 1}

app.get('/test', function (req, res) {
  res.send('Hello TEST World');
})

app.get('/set', function (req, res) {
  console.log("SET",req.query)
  cache.data = req.query.data;
  res.send('Hello TEST World');
})

app.get('/get', function (req, res) {
  res.send("Cache is "+cache.data);
})

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(PORT, () => {
  console.log("server started on port",PORT);
});
