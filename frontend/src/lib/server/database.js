import mysql from "mysql2/promise";

export async function getItems() {
  const con = await mysql.createConnection({
    host: "db-ware",
    user: "root",
    password: "example",
    database: "warehouse"
  });
  
  let res = await con.query("SELECT * FROM `items`").then(
    function([rows, field]){
      return rows;
    }
  );
  return res;
}
