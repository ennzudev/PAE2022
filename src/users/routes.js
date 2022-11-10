const router = require('express').Router();
const { tokenCheckHandler } = require("../../middleware/middleware");

const controller = require('./controller');

router.get('/',tokenCheckHandler, controller.getAll);
router.get('/:id', tokenCheckHandler, controller.getOne);
router.get('/:email', tokenCheckHandler, controller.getByEmail);
router.post("/", controller.postOne);

module.exports = router;