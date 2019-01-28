var db = require('../config/dbconnection'); //reference of dbconnection.js

var Structure = {

    getStructures: function (callback) {
        return db.query("Select * from structures", callback);
    },
    addStructure: function (Task, callback) {
        return db.query("Insert into structures values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [Structure.id, Structure.structureName, Structure.structureType, Structure.totalSpace, Structure.occupiedSpace, Structure.color, Structure.status, Structure.latitude, Structure.longitude, Structure.hidden, Structure.low, Structure.medium, Structure.full], callback);
    }
};
module.exports = Structure;