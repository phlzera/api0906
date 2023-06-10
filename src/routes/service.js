const router = require("express").Router()

const serviceController = require('../controllers/serviceController');

router.post('/services', (req,res) => serviceController.create(req,res))
router.get('/services', (req,res) => serviceController.getAll(req,res))
router.get('/services/:id', (req,res) => serviceController.get(req,res))
router.delete('/services/:id', (req,res) => serviceController.delete(req,res))
router.put('/services/:id', (req,res) => serviceController.update(req,res))
module.exports = router;
