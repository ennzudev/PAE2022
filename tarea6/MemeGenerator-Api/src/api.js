const router = require('express').Router();

const userRoutes = require('./users/routes');
const loginRoutes = require("./session/routes");

router.use('/users', userRoutes);
router.use("/login", loginRoutes);

module.exports = router;