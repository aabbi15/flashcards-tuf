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


export default async function deleteRow( id ) {
    
  try {
    const query = `DELETE FROM cards WHERE id = ${id};`;

    // const query = "Select * from cards;";
    const results = await db.query(query);
    await db.end();
    // console.log(id);
    return {results};
  } catch (error) {
    return { error };
  }
}