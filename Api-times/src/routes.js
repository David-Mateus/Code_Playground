const express = require("express");
const router = express.Router();
const {getFootball, createFootball, deleteFootball, updateFootball} = require('./controllers/FootballController');

router.get('/football', getFootball);
router.post('/football', createFootball)
router.put('/football/:id', updateFootball)
router.delete('/football/:id', deleteFootball)

module.exports = router;