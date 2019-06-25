var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../Models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/create', function (req, res) {

    var email = req.body.user.email;
    var password = req.body.user.password;
    var firstName = req.body.user.firstName
    
    User.create({
        firstName: firstName,
        email: email,
        passwordhash: bcrypt.hashSync(password,10)
    
      }).then(
    
        function createSuccess(user) {
        
          var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
    
          res.json({
            user: user,
            message: 'created',
            sessionToken: token
          });
        },
        function createError(err) {
          res.send(500, err.message);
        }
      );
});

router.post('/login', function(req, res) {
    User.findOne( { where: { email: req.body.user.email } } ).then(
        function(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
                    //1
                    if (matches) {
                        //2
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                        res.json({  //3
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    }else { //4
                        res.status(502).send({ error: "you failed, yo" });
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate" });
            }
        },
        function(err) {
            res.status(501).send({ error: "you failed, yo" });
        }
    );
});

router.delete('/delete/:id', (req, res) => {
    User.destroy({where: {id:req.params.id}})
    .then(successful =>{
        res.status(200).json(successful)
    })
    .catch(err => res.status(500).json({error : err}))
})

module.exports = router;