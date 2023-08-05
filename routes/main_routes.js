const express = require('express')
const router = express.Router()

const search = require('../controllers/search')
const users = require('../controllers/ShowData')
const add = require('../controllers/add')
const deleteUser = require('../controllers/delete')
const update = require('../controllers/update')

const auth = require('../controllers/auth')

// router.get('/', (request, response) => {
//     response.json({
//         info: 'Node.js, Express, and Postgres API'
//     })
// })
router.post('/users/auth', auth.authUser)

router.get('/users', users.getUsers)
router.get('/users/search', search.searchUser)
router.post('/users/add', add.addUsers)
router.post('/users/:id', update.updateUser)
router.delete('/users/:id', deleteUser.deleteUser)


module.exports = router;