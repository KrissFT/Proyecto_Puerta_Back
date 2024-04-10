const path = require('path');
const bcrypt = require('bcryptjs');
const userService = require('../services/user');

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    logout: (req, res) => {
        // Do the magic
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    loginProcess: async (req, res) => {
        let user = await userService.userFindByEmail(req.body.email);
        if (user) {
            let passwordPlain = req.body.password;
            let passwordEncripted = user.password;
            
            let result = bcrypt.compareSync(passwordPlain, passwordEncripted);
            if (result) {
                req.session.user = user;
                res.redirect('/');
            }
            else {
                res.redirect('/login');
            }
        }
        else {
            res.redirect('login');
        }
    },
    apiSession: async (req, res) => { 
        try {
            res.send({
                meta: {
                    status: 200
                },
                data: req.session.user
            });
        } catch (error) {
            res.send({
                meta: {
                    status: 400,
                    error: error
                },
                data: {}
            });
        }
    },
}

module.exports = controller;