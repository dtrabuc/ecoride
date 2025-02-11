import { MongoClient } from 'mongodb';

import { mongodbConfig } from '../config/dbConfig.js';

const mongoClient = new MongoClient(mongodbConfig.uri, mongodbConfig.options);

const dbName = process.env.MONGO_DB_NAME;

try {
    await mongoClient.connect();
    console.log('Connection réussie à MongoDB');
    
    const db = mongoClient.db(dbName);
    const collection = db.collection('documents');

    // Vérifier si la collection contient des documents
    const doc = await collection.findOne();
    console.log('🔎 Test document:', doc);

} catch (err) {
    console.error('Erreur de connection à MongoDB:', err);
}

mongoClient.connect();

export default mongoClient;










