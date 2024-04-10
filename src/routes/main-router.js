const express = require("express");
const path = require("path");
const router = express.Router();

const mainController = require("../controllers/main-controller");
const usersController = require("../controllers/users-controller");

router.get('/', mainController.home);

// Rutas encargadas del logueo
router.get('/login', mainController.login);
router.post('/login',mainController.loginProcess);
router.get('/logout', mainController.logout);

// Rutas encargadas del registro
router.get('/register', mainController.register);
router.post('/register', usersController.userCreate);

//Rutas encargadas de la sesión
router.get('/session', mainController.apiSession);

module.exports = router;