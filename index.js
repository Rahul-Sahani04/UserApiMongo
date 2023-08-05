const express = require('express');
// const router = require('./routes/main_routes');

const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
// app.use('/', app);

const search = require('./controllers/search')
const users = require('./controllers/ShowData')
const add = require('./controllers/add')
const deleteUser = require('./controllers/delete')
const update = require('./controllers/update')

const auth = require('./controllers/auth')

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.post('/users/auth', auth.authUser)
app.get('/users', users.getUsers)
app.get('/users/search', search.searchUser)
app.post('/users/add', add.addUsers)
app.post('/users/:id', update.updateUser)
app.delete('/users/:id', deleteUser.deleteUser)

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
