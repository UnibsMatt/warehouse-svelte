import mysql from "mysql2/promise";


async function getConnection() {
  const con = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.DB_NAME
  });
  return con;
} 
/** 
async function getConnection() {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: "warehouse"
  });
  return con;
}
*/


export async function getItems() {
  const con = await getConnection();
  
  let res = await con.query("SELECT * FROM `items`").then(
    function ([rows, field]) {
      return rows;
    }
  );
  return res;
}


export async function addItem(formData: FormData) {
  
  const con = await getConnection();
  const codice = formData.get("codice");
  const categoria = formData.get("categoria");
  const descrizione = formData.get("descrizione");
  const prezzo_vendita = formData.get("prezzo_vendita");
  const prezzo_acquisto = formData.get("prezzo_acquisto");
  const quantita = formData.get("quantita");
  await con.query("INSERT INTO items VALUES (?,?,?,?,?,?,?)", [null, codice, descrizione, prezzo_acquisto, prezzo_vendita, quantita, categoria]);
}

export async function sellItem(formData: FormData) {
  
  const con = await getConnection();
  //TODO 
}

