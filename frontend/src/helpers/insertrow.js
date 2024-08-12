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

db.connect((err) =>{

       


  if(err){
      console.log(err);
      return;
  }

  console.log('Connected to database.');
  

})


export default async function insertRow( data ) {
    
  try {

    console.log(data.topic);
    console.log(data.ques);
    console.log(data.ans);
    const query = `INSERT INTO cards (topic, ques, ans) VALUES ("${data.topic}","${data.ques}","${data.ans}");`;

   
    const results = await db.query(query);
   
    await db.end();
    return {results};

    

  } catch (error) {
   
    return { error:error };
  }
}