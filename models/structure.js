var db = require('../config/dbconnection'); //reference of dbconnection.js

var Structure = {

    getStructures: function (callback) {
        return db.query("Select * from structures", callback);
    },
    addStructure: function (Structure, callback) {
        var structureName = Structure.structureName;
        var structureType = Structure.structureType;
        var totalSpace = Structure.totalSpace;
        var occupiedSpace = Structure.occupiedSpace;
        var color = Structure.color;
        var status = Structure.status;
        var latitude = Structure.latitude;
        var longitude = Structure.longitude;
        var hidden = Structure.hidden;
        var low = Structure.low;
        var medium = Structure.medium;
        var full = Structure.full;
        
        return db.query("Insert into structures values(id,structure_name,structure_type,total_space,occupied_space,color,status,latitude,longitude,hidden,low,medium,full)", ['',structureName, structureType, totalSpace, occupiedSpace, color, status, latitude, longitude, hidden, low, medium, full], callback);
    }
};
module.exports = Structure;