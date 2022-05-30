const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const configDb = require("./configDb");

const db = mysql.createConnection(configDb);
const app = express();

/*Jelszó titkosításához szükséges könyvtár beolvasása*/
const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(cors());

/*A családtagok menüpont alatti táblázat adataihoz a felhasznalo tábla lekérdezése*/
app.get("/admin/csaladtagok", (req, res) => {
  db.query("select id, becenev, kor, penz from felhasznalo", (err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});

/*A feladatok menüpont alatti táblázat adataihoz a feladatok tábla lekérdezése*/
app.get("/admin/feladatok", (req, res) => {
  db.query(
    "select megnevezes, date_format(hatarido, '%Y-%m-%d') as hatarido, felhasznalo_id, pont from feladatok",
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send(result);
    }
  );
});

/*A pontbeváltás menüpont alatti táblázat adataihoz a jutalmak tábla lekérdezése*/
app.get("/admin/jutalmak", (req, res) => {
  db.query(
    "select jutalmak_id, megnevezes, szukseges_pont from jutalmak",
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send(result);
    }
  );
});

/*A bank menüpont alatti táblázat adataihoz a befektetés tábla lekérdezése*/
app.get("/admin/befektetes", (req, res) => {
  db.query(
    "select befektetes_id, megnevezes, napok, osszeg, hozam, round((osszeg * (1 + hozam))) as varhato_penz, date_add('2022-04-23', interval napok day) as lejarat from befektetes",
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send(result);
    }
  );
});

/*A családtagok menüpont alatt új családtag hozzáadása*/
app.post("/client/uj_csaladtag", (req, res) => {
 /*  var name = req.body.name;

  var today = new Date()
  var birthdate = Date.parse(req.body.birthdate)

  var age = today.getFullYear() - birthdate.getFullYear();
  var money = req.body.money; */

  var sql = "INSERT INTO felhasznalo(becenev, kor, penz) VALUES(?,?,?);";

  db.query(sql, ["name", 23, 23], (err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});

/*A felhasználó által regisztráció során megadott adatok küldése a szerver felé*/
app.post("/client/register_user", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  /*Jelszó titkosítása*/
  const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync());

  var sql = "INSERT INTO adminok(nev, email, jelszo) VALUES(?,?,?);";

  db.query(sql, [name, email, hashed], (err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});

/*Megjegyzés kiírása a szerver futása esetén*/
app.listen(5000, () => console.log("server listening on port 5000..."));
