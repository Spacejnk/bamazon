// set var for dependencies
//var express = require('express');
var mysql = require('mysql');
var inquirer = require('inquirer');

//var app = express();

// app.listen('3306', () => {
//     console.log('Server started on port 3306')
// })

// create mysql database connection
var db = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    // password: '',

    // database: 'bamazon_db'
});

// db.connect(function(err){
//     if (err) throw err;
//     console.log('bamazon_db is connected' + db.threadId);
//     //db.end();
//     afterConnection();
// });

// function afterConnection(){
//     db.query('SELECT * FROM products', function(err, res) {
//         if(err) throw err;
//         console.log(res);
//         db.end();
//     } )
// }

// function inquirer for prompt messages
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.


    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Which product id would you like to buy?"
          },
        {
            type: "checkbox",
            name: "name",
            choices: ["clothing", "kitchen", "bathroom", "outdoor"]
    

          },
          {
            type: "checkbox",
            name: "products",
            choices: ['t-shirt', 'pants', 'socks', 'fork', 'knife', 'toothbrush', 'soap', 'hose', 'shovel', 'saw']
          } , 
          // choose
          {
              type: "checkbox",
              name: "products",
              message: "How many units would you like to buy?",
              choices: [1, 2, 5, 10, 50]


          }

    ])
    .then(function(user) {
        
        if (user.choices === 'pants') {
          console.log("It's available ");
          
        }
        else {
          console.log("That's okay ");
        }
      });
    










