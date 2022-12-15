var router = require('express').Router();
var CategoryController =  require('../../controller/categoryController')
 
router.post("/",CategoryController.addCategory)
router.get("/",CategoryController.getAllCategories)
router.put("/id", CategoryController.updateCategory)
router.delete("/", CategoryController.deleteCategory)
router.get("/id",CategoryController.getSingleCategory)
router.get("/type",CategoryController.getCategoryByType)

module.exports = router;
