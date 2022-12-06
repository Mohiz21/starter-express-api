var router = require('express').Router();
var JobController = require('../../controller/companyJobController')
 
router.post("/",JobController.addJob);
router.get("/",JobController.getAllJobs)
router.get("/company",JobController.getAllJobs)
router.put("/id", JobController.updateJob)
router.delete("/", JobController.deleteJob)
router.get("/id",JobController.getSingleJob)

module.exports = router;