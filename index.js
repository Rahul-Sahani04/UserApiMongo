const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const PORT = process.env.PORT || 8000
const URI = process.env.MONGO_URI


app.get("/", (req, res) => {
    res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});


mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
