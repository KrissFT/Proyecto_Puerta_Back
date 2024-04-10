const express = require("express");
const path = require("path");
const router = express.Router();

const usersController = require("../controllers/users-controller");

// Create
router.post('/users', usersController.userCreate);

// Read
router.get('/users', usersController.usersList);
router.get('/users/:id', usersController.userDetail);

// Update
router.put('/users/:id', usersController.userUpdate);

// Delete
router.delete('/users/:id', usersController.userDelete);

module.exports = router;