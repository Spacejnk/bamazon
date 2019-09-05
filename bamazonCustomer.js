// set var for dependencies
//var express = require('express');
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

//var app = express();

// app.listen('3306', () => {
//     console.log('Server started on port 3306')
// })

// create mysql database connection
var db = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: '',

    database: 'bamazon_db'
});

db.connect();

var displayStore = function(){
    db.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
      console.log(' *** ------------------ ***');
      console.log(' *** Welcome to Bamazon ***');
      console.log(' *** ------------------ ***');
      

      var table = new Table({
        head: ['Prod_ID', 'Products', 'Price', 'In_Stock_Amt']
      , colWidths: [15, 15, 7, 14],
      colAligns: ['center', 'left', 'center', 'center'],
      style: {
          head: ['aqua'],
          compact: true
      }
    });



    for (var i = 0; i < res.length; i++) {
        
        table.push([res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]);
    
    }
    console.log(table.toString());
    askShopInfo();
    
    });

};

displayStore();



// function inquirer for prompt messages
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

function askShopInfo() {
    

    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Which product id would you like to buy?",
            choices: ["clothing", "kitchen", "bathroom", "outdoor"]
          },
          {
            type: "checkbox",
            name: "products",
            choices: ["clothing", "kitchen", "bathroom", "outdoor"]
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
        
        if (user.choices === 'clothing') {
          console.log("It's available ");
          
        }
        else {
          console.log("That's okay ");
        }
      });

    };
    










