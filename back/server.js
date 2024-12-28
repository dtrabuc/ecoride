const express = require("express");
const dbMySQL = require("./config/dbMySQL");
const dbMongoDB = require("./config/dbMongoDB");
const dotenv = require("dotenv").config();
const port = 8080;



const app = express();


//Connexion à la BDD MySQL
dbMySQL();

//connexion à la BDD MongoDB
dbMongoDB();

//Middleware pour traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/post.routes"));


app.listen(port, () => console.log("Serveur démaré sur le port " + port));
