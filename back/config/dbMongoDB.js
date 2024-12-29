    const mongoose = require("mongoose");

    const dbMongoDB = async () => {
        try {
            mongoose.set('strictQuery', false);
            await mongoose.connect(process.env.MONGO_URI);
            console.log("BDD MongoDB OK");
        } catch (err) {
            console.log(err);
            process.exit();
        }
    };

    module.exports = dbMongoDB;