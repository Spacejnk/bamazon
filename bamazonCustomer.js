// set var for dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

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


function askShopInfo() {
    

    inquirer
    .prompt([
        {
            name: "itemYouWant",
            type: "input",
            message: "Which product id would you like to buy?"
            
          } 
    ])

    .then(function(theItemYouPick) {
        
        var yourChoice = theItemYouPick.itemYouWant;

        db.query("SELECT * FROM products WHERE item_id=?", yourChoice, function(err, res){
            if (err) throw err;
            
            if(res.length === 0) {
                console.log('Item does not exist, Please enter a correct id from list');
            
            askShopInfo();
            
        } else {
            inquirer .prompt({
                name: "quantity",
                type: "input",
                message: "How many items would you like to buy?"
            })
            .then(function(theItemYouPickQuantity) {
                var numOfItems = theItemYouPickQuantity.quantity;
                if (numOfItems > res[0].stock_quantity) {
                    console.log("Sorry we only have " + res[0].stock_quantity + " items of this selected product");

                    askShopInfo();
                } else {
                    console.log("--------------");
                    console.log(res[0].product_name + " purchased");
                    console.log(numOfItems + " qty @ $" + res[0].price);
                    console.log("--------------");
                    console.log("Total Cost is  " + numOfItems * res[0].price.toFixed(2));
                    var newQuantity = res[0].stock_quantity - numOfItems;

                    db.query(
                        "UPDATE products SET stock_quantity = " +
                        newQuantity + " WHERE item_id = " + res[0].item_id,

                        function(err, resUpdate){
                            if (err) throw err;
                            console.log("-----");
                            console.log("Your order went through.");
                            console.log("Thank you.");
                            db.end();
                        }
                    );
                } 
                
                
            })
        }
        
        });

    });

};

displayStore();











