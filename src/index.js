const express = require("express");
const cors = require("cors");
const path = requier("path");

const server = express()

server.use(cors ())

const port = 5001;
server.listen(port, () => {
  console.log('Server listening at http:/localhost:${port}');
})

const staticServerpath = "./web";
server.use(express.static(staticServerpath));

server.get('*',(req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../web/not-found.html'))
})