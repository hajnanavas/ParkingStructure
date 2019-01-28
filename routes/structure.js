var express = require('express');
var router = express.Router();
var Structure = require('../models/structure');

router.get('/getStructures', function (req, res, next) {
    Structure.getStructures(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/addStructure', function (req, res, next) {

    Structure.addStructure(req.body, function (err, count) {
        
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
module.exports = router;