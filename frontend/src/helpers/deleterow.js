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