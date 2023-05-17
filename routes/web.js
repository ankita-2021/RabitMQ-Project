const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentControllers.js');


router.get('/', StudentController.getAllDoc)
router.post('/', StudentController.createDoc)
router.get('/:id', StudentController.getAllDocById)


module.exports= router