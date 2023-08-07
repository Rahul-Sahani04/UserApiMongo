const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes/main_routes')
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config();
const PORT = process.env.PORT || 4000
const URI = process.env.MONGO_URI


app.get("/", (req, res) => {
    res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

app.use("/", routes)

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
