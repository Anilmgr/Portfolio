const mysql = require('mysql');

let con = mysql.createConnection({
   host: "localhost",
    user: "root",
    password: "",
    database: "db_portfolio"
});

con.connect(function(err,connection){
    if (err)
        console.log('Error in establishing database connection.');
    if(connection)
        console.log('Connection Established.');
});

module.exports = con;