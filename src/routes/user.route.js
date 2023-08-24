const router = require("express").Router();
const userController = require("../modules/user/user.controller");
router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.put("/user/:id", userController.findOneAndUpdate);
router.get("/users", userController.findAll);
router.get("/user/:id", userController.findOneById);
router.delete("/user/:id", userController.findOneAndDelete);
module.exports = router;
