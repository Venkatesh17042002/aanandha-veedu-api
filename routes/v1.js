var express = require('express');
var router = express.Router();

const avController = require('../controllers/av.controller');
// router.get('/getEmployees', EmployeeController.getEmployees);

// router.get('/getrole',EmployeeController.getrole);

// router.post('/deleterecord',EmployeeController.deleterecord);
// router.post('/getrecord',EmployeeController.getrecord);
// router.post('/editemployee',EmployeeController.editemployee);

router.post('/addbudget', avController.addbudget);
router.get('/getbudget',avController.getbudget);
router.post('/deletebudget',avController.deletebudget);
router.post('/getbudgetrecord',avController.getbudgetrecord);
router.post('/editbudget',avController.editbudget);

router.post('/addstock', avController.addstock);
router.get('/getstock',avController.getstock);
router.post('/deletestock',avController.deletestock);
router.post('/getstockrecord',avController.getstockrecord);
router.post('/editstock',avController.editstock);

router.post('/addtobuy', avController.addtobuy);
router.get('/gettobuy',avController.gettobuy);
router.post('/deletetobuy',avController.deletetobuy);
router.post('/gettobuyrecord',avController.gettobuyrecord);
router.post('/edittobuy',avController.edittobuy);
module.exports = router;

