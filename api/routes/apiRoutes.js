const express = require('express');
const router = express.Router();
const ChronoController = require('../controllers/ChronoController');

// User routes
router.post('/users', ChronoController.createUser );
router.get('/users/:id', ChronoController.getUser );
router.put('/users/:id', ChronoController.updateUser );
router.delete('/users/:id', ChronoController.deleteUser );

module.exports = router;
