export const mysqlConfig = {
    host: 'localhost', 
    user: 'root',
    password:  '',
    database: 'ecoride',
    port: 3306 
};

export const mongodbConfig = {
    uri: 'mongodb://localhost:27017/ecoride',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};