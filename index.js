import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/mysql/users.js";
import connection from "./database/mysql.js";
import mongoClient from "./database/mongodb.js";

//Chargement des variables d'environnement
dotenv.config();

//Définition du port du serveur
const port = process.env.PORT || 8888;

const app = express();

//Middleware
app.use(express.json()); 

//Route de base
app.get("/", (req, res) => {
    res.send("bienvenue sur le site");
});
//Routes de test mongoDB
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

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});