const mysql = require("mysql");


const connectDBMySQL = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });

    connection.connect((err) => {
        if (err) {
            console.error("Erreur de connexion: " + err.stack);
            return;
        }
        console.log("Connexion réussie à la BDD MySQL");
    });

    return connection;
};

module.exports = connectDBMySQL;
