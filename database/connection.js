const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "fridayfred3p",
    password: "timmit3p"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connection established");
});