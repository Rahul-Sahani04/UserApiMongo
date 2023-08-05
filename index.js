const express = require('express');
const router = require('./routes/main_routes');

const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

const app = express();
const cors = require("cors")


app.use(cors())

app.get("/", (req, res) => {
    res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

app.use('/api', router);

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
