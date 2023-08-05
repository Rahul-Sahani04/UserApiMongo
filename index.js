const express = require('express');
const { getUsers } = require('./controllers/ShowData')
const { addUsers } = require('./controllers/add')
const { authUser } = require('./controllers/auth')
const { deleteUser } = require('./controllers/delete')
const { searchUser } = require('./controllers/search')
const { updateUser } = require('./controllers/update')

const app = express();
const cors = require("cors")
app.use(express.json())

require("dotenv").config();
const port = process.env.PORT || 8000


app.get("/", (req, res) => {
  res.json({ page: "Main page!", info: 'Node.js, Express, and Postgres API', availableRoutes: ["/cookie/all", "/cookie/random", "/cookie/add"] });
});

app.get("/all", (req, res) => {
  res.json({ users: "ALL" });
});

app.get("/search", (req, res) => {
  res.json({ users: "Searching" });
});


// app.use("/api", APIroutes)

console.log("API WORKING")


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


module.exports = { app };
