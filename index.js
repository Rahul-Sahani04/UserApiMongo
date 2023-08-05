const express = require('express');
const { addUsers } = require('./controllers/add')
const { deleteUser } = require('./controllers/delete')
const { searchUser } = require('./controllers/search')
const { getUsers } = require('./controllers/ShowData')
const { updateUser } = require('./controllers/update')
const { authUser } = require('./controllers/auth')


const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000


app.get("/", (req, res) => {
  res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availablecontrollers: ["/users/all", "/users/random", "/users/add"] });
});

app.get('/users/all', getUsers)
app.get('/users/add', addUsers)
app.post('/users/search', searchUser)
app.delete('/users/:id', deleteUser)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = { app };
