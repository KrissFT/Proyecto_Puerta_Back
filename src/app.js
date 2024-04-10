const express = require('express');
const app = express();
const config = require('dotenv').config;
const session = require('express-session');
// Configuración del process.env
config();

// Inicio del servidor
const port = process.env.PORT || 3418;
app.listen(port, () => {
    console.log("Escuchando en puerto "+port);
});

// Configuración para procesar formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({
    secret: 'Batman',
    resave: false,
    saveUninitialized: false
}))

// Rutas públicas
const static = express.static("public");
app.use(static);

// Router principal
const mainRouter = require('./routes/main-router');
app.use(mainRouter);

// Router de usuarios
const usersRouter = require('./routes/users-router');
app.use(usersRouter);
