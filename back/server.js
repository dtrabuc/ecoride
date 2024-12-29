const dotenv = require("dotenv").config();
const express = require("express");
const dbMySQL = require("./Config/dbMySQL");
const dbMongoDB = require("./Config/dbMongoDB");
const port = 5000;



const app = express();


//Connexion à la BDD MySQL
dbMySQL();

//connexion à la BDD MongoDB
dbMongoDB();

//Middleware pour traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes pour MongoDB
app.use("/post", require("./routes/post.routes"));

// Exemple de route pour MySQL
app.get('/mysql/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur MySQL', error: err });
        }
        res.json(results);
    });
});


app.listen(port, () => console.log("Serveur démaré sur le port " + port));
