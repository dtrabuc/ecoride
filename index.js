import express from "express";
import dotenv from "dotenv";
import connection from "./database/mysql.js";
import mongoClient from "./database/mongodb.js";

dotenv.config();

const port = process.env.PORT || 8888;

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("bienvenue sur le site");
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

app.get("/test-mongodb", async (req, res) => {
    try {
        const database = mongoClient.db('ecoride');
        const collection = database.collection('your_collection_name'); // Remplacez par le nom de votre collection
        const documents = await collection.find({}).toArray();
        res.json({ documents });
    } catch (err) {
        console.error('Erreur lors de la récupération des documents MongoDB:', err);
        res.status(500).send("Erreur lors de la récupération des documents MongoDB");
    }
});

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});