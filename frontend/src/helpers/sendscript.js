


const mysql = require('mysql2');


console.log(process.env.MYSQL_HOST);
const db = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  port     : process.env.MYSQL_PORT,
  database : process.env.MYSQL_DATABASE

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


