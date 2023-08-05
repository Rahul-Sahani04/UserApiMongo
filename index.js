const express = require('express');
// const routes = require('./routes/routes') 
// const mongo = require('mongoose')
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000


app.get("/", (req, res) => {
    res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

// app.use("/users", routes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = { app };
