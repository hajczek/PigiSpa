const express = require("express");
const server = express();

server.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
