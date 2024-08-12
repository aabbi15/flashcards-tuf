import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: "flashcards.ctiy0skiyuo1.ap-south-1.rds.amazonaws.com",
    port: "3306",
    database: "flashcards",
    user: "aabbi15",
    password: "Wakanda4ever"
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