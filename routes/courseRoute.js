const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/', courseController.createCourse); // POST http://localhost:3000/courses
router.get('/', courseController.getAllCourses);
router.get('/:slug', courseController.getCourse);

module.exports= router;