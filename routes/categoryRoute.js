const express = require('express');

const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/', categoryController.createCategory); // POST http://localhost:3000/categories

module.exports= router;