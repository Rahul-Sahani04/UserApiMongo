const connectDB = require('./connect_mongo')
connectDB()

const express = require('express')
const router = express.Router()
const search = require('../controllers/search')
const users = require('../controllers/ShowData')
const add = require('../controllers/add')
const deleteUser = require('../controllers/delete')
const update = require('../controllers/update')

const auth = require('../controllers/auth')

router.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

router.post('/auth', auth.authUser)
router.get('/all', users.getUsers)
router.get('/search', search.searchUser)
router.post('/add', add.addUsers)
router.post('/:id', update.updateUser)
router.delete('/:id', deleteUser.deleteUser)


module.exports = router;