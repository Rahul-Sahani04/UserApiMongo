const express = require('express');
const router = require('./routes/main_routes');

const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', router); // Use the imported router as middleware

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
