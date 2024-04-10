module.exports = (sequelize, DataTypes) => {
    let alias = "Users";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        tableName: "users",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models){
        // Users.belongsTo(models.OtherOne, { 
        //     as: "Alias",
        //     foreignKey: "foreign_key",
        // })
    }

    return Users;
}