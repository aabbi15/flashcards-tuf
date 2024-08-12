import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});


export default async function sendScript( script ) {
    
  try {

    
    // const query = `INSERT INTO cards (topic, ques, ans) VALUES ("${data.topic}","${data.ques}","${data.ans}");`;

    const query =" CREATE TABLE cards (id INT AUTO_INCREMENT PRIMARY KEY,topic VARCHAR(255) NOT NULL,ques VARCHAR(255) NOT NULL,ans VARCHAR(255) NOT NULL);";
   
    const results = await db.query(query);
    await db.end();
    
    return {results};

  } catch (error) {
   
    return { error:error };
  }
}