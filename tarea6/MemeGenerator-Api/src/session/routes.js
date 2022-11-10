const router = require("express").Router();

const controller = require("./controller");

router.post("/", controller.postOne);
router.get("/", controller.getOne);

module.exports = router;