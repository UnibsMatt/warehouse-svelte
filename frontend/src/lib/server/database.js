import mysql from "mysql2/promise";

export function getItems() {
  const con = mysql.createConnection({
    host: "db-ware",
    user: "ware-admin",
    password: "Lol92lol92;",
    database: "warehouse"
  });
  connection.query(
    'SELECT * FROM `itmes`',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

}
