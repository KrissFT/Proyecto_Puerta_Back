const userService = require('../services/user');
const path = require('path');
// Enviroment variables config
var config = require('dotenv').config;
config();

const controller = {
    // Create
    userCreate: async (req, res) => {
        try {            
            await userService.userCreate(req.body);
            res.redirect('/');
            // res.send({
            //     code: 200,
            //     msg: "Creacion exitosa",
            //     result: 'http://localhost:'+process.env.PORT || 3418
            // });
        } catch (error) {
            res.redirect('/register')
            // res.send({
            //     code: 400,
            //     msg: "Creacion fallida",
            //     result: error
            // });
        }
    },
    // Read -> List
    usersList: async (req, res) => { 
        try {
            let usersList = await userService.userFindAll();
            res.send({
                meta: {
                    status: 200,
                    count: usersList.length
                },
                data: usersList
            });
        } catch (error) {
            res.send({
                meta: {
                    status: 400,
                    error: error
                },
                data: []
            });
        }
    },
    // Read -> Detail
    userDetail: async (req, res) => { 
        const id = req.params.id;
        try {
            let userDetail = await userService.userFindById(id);
            res.send({
                meta: {
                    status: 200
                },
                data: userDetail
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
    // Update
    userUpdate: async (req, res) => {
        const id = req.params.id;
        let resultado = await userService.userUpdate(id, req.body);
        if (resultado > 0) {
            res.send({
                code: 200,
                msg: "Edición exitosa",
                result: 'http://localhost:'+process.env.PORT || 3418+'/users/'+id
            });
        } else {
            res.send({
                code: 400,
                msg: "Edición fallida",
                result: 'http://localhost:'+process.env.PORT || 3418+'/users/'+id
            });
        };
    },
    // Delete
    userDelete: async (req, res) => {
        const id = req.params.id;
        let resultado = await userService.userDelete(id);
        if (resultado > 0) {
            res.send({
                code: 200,
                msg: "Eliminación exitosa",
                result: 'http://localhost:'+process.env.PORT || 3418+'/users/'
            });
        } else {
            res.send({
                code: 400,
                msg: "Eliminación fallida",
                result: 'http://localhost:'+process.env.PORT || 3418+'/users/'
            });
        };
    }
}

module.exports = controller;