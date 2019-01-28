var mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'hajna',
    password: 'password',
    database: 'parking',
};
var pool = mysql.createPool(config);
module.exports = pool;