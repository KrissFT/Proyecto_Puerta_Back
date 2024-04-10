const {Users} = require('../database/models/index');
const bcrypt = require("bcryptjs");

const service = {
    userCreate: async (data) => {
        let userNew = {
            username: data.username,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: bcrypt.hashSync(data.password),
            role: data.email.includes('@admin.com') ? 2 : 1 
        };
        Users.create(userNew);
    }, // C

    userFindAll: async () => {
        let userList = await Users.findAll();
        return userList;
    }, // R
    userFindById: async (id) => {
        let userFound = Users.findOne({
            where: {
                id: id
            }
        })
        return userFound;
    }, // R
    
    userFindByEmail: async (email) => {
        let userFound = Users.findOne({
            where: {
                email: email
            }
        })
        return userFound;
    },

    userUpdate: async (id, data) => {
        let userToEdit = await Users.findOne({
            where: {
                id: id
            }
        })

        let newData = {
            username: data.username || userToEdit.username,
            first_name: data.firstName || userToEdit.firstName,
            last_name: data.lastName || userToEdit.lastName,
            email: data.email || userToEdit.email,
            password: data.password || userToEdit.password,
        };

        let resultado = Users.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    userDelete: async (id) => {
        let resultado = Users.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;