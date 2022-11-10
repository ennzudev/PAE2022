const router = require('express').Router();
const upload = require('./../middlewares/files');

const controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', archivo.single('image'), controller.addOne)

module.exports = router;