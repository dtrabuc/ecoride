const mongoose = require("mongoose");

const dbMongoDB = async () => {
    try {
         mongoose.set('strictQuery', false);
     mongoose.connect(process.env.MONGO_URI);
         console.log("Connection réussie à la BDD MongoDB");
    }catch (err) {
        console.log("Error: ", err);
        process.exit();
    };
};

module.exports= dbMongoDB;