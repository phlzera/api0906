const router = require('express').Router();

const servicesRouter = require('./service')
const partyRouter = require('./parties.js')

router.use('/', servicesRouter)
router.use('/', partyRouter)

module.exports = router;

