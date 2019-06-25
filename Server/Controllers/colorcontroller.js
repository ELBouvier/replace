var express = require('express');
var router = express.Router();
var sequelize = require ('../db');
var User = sequelize.import('../Models/user');
var Color = sequelize.import('../Models/color');

router.put('/colorplace', function (req, res) {
    var colorName = req.body.color.colorName;
    var colorVal = req.body.color.colorVal;
    var setter = req.body.color.setter;

    Color.update(req.body.color, { where: {id : 1},
       returning: true
    })
    .then (
        function createSuccess() {
            res.status(200).json(color)
        },
        function createError(err) {
            res.status(500).send(err)
        }
    )
});


router.get('/color/colorplace',  (req, res) => {
    Color.findAll({ where : { id : 1 }})
        .then(Color => res.status(200).json(Color))
        .catch(err => res.status(500).json({ error : err }))
    });


//Working Post
// router.post('/colorplace', function (req, res) {
//     var colorName = req.body.color.colorName;
//     var colorVal = req.body.color.colorVal;
//     var setter = req.body.color.setter;

//     Color.create({
//         colorName: colorName,
//         colorVal: colorVal,
//         setter: setter
//     })
//     .then (
//         function createSuccess() {
//             res.status(200).send(Color)
//         },
//         function createError(err) {
//             res.status(500).send(err)
//         }
//     )
// });

// router.get('/colorplace', function (req, res) {
//     var colorName
// })

module.exports = router;