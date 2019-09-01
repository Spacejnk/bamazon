var express = require('express');
var mysql = require('mysql');

var app = express();

app.listen('3306', () => {
    console.log('Server started on port 3306')
})
var db = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: '',

    database: 'bamazon_db'
});

db.connect(function(err){
    if (err) throw err;
    console.log('bamazon_db is connected' + db.threadId);
    //db.end();
    afterConnection();
});

function afterConnection(){
    db.query('SELECT * FROM products', function(err, res) {
        if(err) throw err;
        console.log(res);
        db.end();
    } )
}

