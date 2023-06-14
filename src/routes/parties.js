const router = require("express").Router()

const partyController = require('../controllers/partyController');

router.post('/parties', (req,res) => partyController.create(req,res))

module.exports = router;
