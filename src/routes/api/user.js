var router = require('express').Router();
var UserController =  require('../../controller/userController')
 
router.post("/",UserController.addUser)
router.post("/login", UserController.loginUser)
router.get("/",UserController.getAllUsers)
router.put("/id", UserController.updateUser)
router.delete("/", UserController.deleteUser)
router.get("/id",UserController.getSingleUser)

module.exports = router;
