module.exports = (sequelize, DataTypes) => {
    let alias = "Roles";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    };

    let config = {
        tableName: "roles",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Roles = sequelize.define(alias, cols, config);

    Roles.associate = function(models){
        // Roles.hasMany(models.OtherOne, { 
        //     as: "Alias",
        //     foreignKey: "foreign_key",
        // })
    }

    return Roles;
}