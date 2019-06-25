module.exports = function (sequelize, DataTypes) {

    return sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            notNull: true
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            notNull: true,
            isEmail: true
        },

        passwordhash: {
            type: DataTypes.STRING,
            min: 6
        }
    });
};