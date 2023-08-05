const express = require('express');
const APIroutes = require('./routes/routes') 
// const mongo = require('mongoose')

const app = express();
const cors = require("cors")
app.use(express.json())

require("dotenv").config();
const port = process.env.PORT || 8000


app.get("/", (req, res) => {
  res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

app.use("/api", APIroutes)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


module.exports = { app };
