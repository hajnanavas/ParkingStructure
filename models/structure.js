var db = require('../config/dbconnection'); //reference of dbconnection.js

var Structure = {

    getStructures: function (callback) {
        return db.query("Select * from structures", callback);
    },
    addStructure: function (Structure, callback) {
        return db.query("Insert into structures values(id,structure_name,structure_type,total_space,occupied_space,color,status,latitude,longitude,hidden,low,medium,full)", ['',Structure.structureName, Structure.structureType, Structure.totalSpace, Structure.occupiedSpace, Structure.color, Structure.status, Structure.latitude, Structure.longitude, Structure.hidden, Structure.low, Structure.medium, Structure.full], callback);
    }
};
module.exports = Structure;