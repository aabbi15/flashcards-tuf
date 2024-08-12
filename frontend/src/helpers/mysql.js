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


export default async function excuteQuery({ query }) {
  try {
    query = "SELECT * FROM cards;";
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}