const router = require("express").Router()

const serviceController = require('../controllers/serviceController');

router.post('/services', (req,res) => serviceController.create(req,res))
router.get('/services', (req,res) => serviceController.getAll(req,res))
router.get('/services/:id', (req,res) => serviceController.get(req,res))
module.exports = router;
