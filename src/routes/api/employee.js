var router = require('express').Router();
var EmployeeController =  require('../../controller/employeeController.js')
 
router.post("/",EmployeeController.addEmployee)
router.get("/",EmployeeController.getAllEmployees)
router.put("/id", EmployeeController.updateEmployee)
router.delete("/", EmployeeController.deleteEmployee)
router.get("/id",EmployeeController.getSingleEmployee)
router.get("/user",EmployeeController.getAllEmployees)
router.get("/filter",EmployeeController.filterEmployeByCategory)

module.exports = router;