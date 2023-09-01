const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/', courseController.createCourse); // http://localhost:3000/courses

module.exports= router;