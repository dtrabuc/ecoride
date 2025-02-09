import express from "express";
import dotenv from "dotenv";
import connection from "./database/mysql.js";

const port = 8888;

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("bienvenue sur le LLLLsite!zzz");
});

app.get("/test-mysql", (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.send("Erreur lors de la récupération des utilisateurs");
            return;
        }
        res.json({ users: results });
    });
});

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});