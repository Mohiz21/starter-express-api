var router = require('express').Router();

router.use('/user', require('./api/user.js'));
router.use('/sellvehicle', require('./api/sellVehicle.js'));
router.use('/tranportvehicle', require('./api/transportVehicle.js'));
router.use('/admin', require('./api/admin.js'));
router.use('/category', require('./api/category.js'));
router.use('/company', require('./api/company.js'));
router.use('/employee', require('./api/employee.js'));
router.use('/shop', require('./api/shop.js'))
router.use('/shopitem', require('./api/shopItem.js'));
router.use('/service', require('./api/service.js'));
router.use('/job', require('./api/job.js'));
router.use('/property', require('./api/property.js'));

module.exports = router;