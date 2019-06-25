var express = require('express');
var router = express.Router();
var sequelize = require ('../db');
var User = sequelize.import('../Models/user');
var Color = sequelize.import('../Models/color');

router.post('/colorplace', function (req, res) {
    var colorName = req.body.color.colorName;
    var colorVal = req.body.color.colorVal;
    var setter = sessionStorage.getItem('currentName');

    Color.create({
        colorName: colorName,
        colorVal: colorVal,
        setter: setter
    })
    .then (
        function createSuccess() {
            res.status(200).send(Color)
        },
        function createError(err) {
            res.status(500).send(err)
        }
    )
});

module.exports = router;