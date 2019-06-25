const Sequelize = require('sequelize');
  
const sequelize = new Sequelize('replace replace', 'postgres', 'nopass', {
    host: 'localhost',
    dialect: 'postgres'
});
       
sequelize.authenticate().then(
    function() {
        console.log('Connected to REplace postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;