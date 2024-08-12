


const mysql = require('mysql2');


console.log("flashcards.ctiy0skiyuo1.ap-south-1.rds.amazonaws.com");
const db = mysql.createConnection({
  host     : "flashcards.ctiy0skiyuo1.ap-south-1.rds.amazonaws.com",
  user     : "aabbi15",
  password : "Wakanda4ever",
  port     : "3306",
  database : "flashcards"

});

db.connect((err) =>{

       


    if(err){
        console.log(err);
        return;
    }

    console.log('Connected to database.');
    

})

const createTableQuery = " CREATE TABLE IF NOT EXISTS cards (id INT AUTO_INCREMENT PRIMARY KEY,topic VARCHAR(255) NOT NULL,ques VARCHAR(255) NOT NULL,ans VARCHAR(255) NOT NULL);";

// const createTableQuery = "use flashcards;";
async function test(){
    db.query(
        createTableQuery,
        function (err, results, fields) {

            if(err) console.log(err);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

test();

db.end();


