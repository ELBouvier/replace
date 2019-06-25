module.exports = function (sequelize, DataTypes) {

    return sequelize.define('color', {
    colorName: { 
         type: DataTypes.STRING
     },
   colorVal: {
       type: DataTypes.STRING
    },
     setter: {
        type: DataTypes.STRING
    } 
});
};