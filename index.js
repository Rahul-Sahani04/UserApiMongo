const express = require('express');
const routes = require('./routes/main_routes');

require('dotenv').config();
const URI = process.env.MONGO_URI;
const mongoose = require('mongoose');
const PORT = process.env.PORT;

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', routes); // Use the imported router as middleware

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
