const express = require("express");
const dbMySQL = require("./config/dbMySQL");
const connectMongoDB = require("./config/dbMongoDB");
const dotenv = require("dotenv").config();
const port = 5000;



const app = express();


//Connexion à la BDD MySQL
dbMySQL();

//connexion à la BDD MongoDB
connectMongoDB();

//Middleware pour traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/post.routes"));


app.listen(port, () => console.log("Serveur démaré sur le port " + port));
