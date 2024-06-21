// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
// const { MongoClient } = require('mongodb');

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    async function connectToDatabase() {
        const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
        const dbName = 'giftDB';
        let dbInstance;
      
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      
        try {
          // Connect to the MongoDB server
          await client.connect();
      
          // Assign the db instance
          dbInstance = client.db(dbName);
      
          console.log('Successfully connected to the database');
        } catch (error) {
          console.error('Error connecting to the database', error);
        } finally {
          // Uncomment the following line if you want to close the connection after returning the dbInstance
          // await client.close();
        }
      
        return dbInstance;
      }
      
      // Example usage
      connectToDatabase().then(db => {
        // Use the dbInstance here
        console.log('Database instance:', db.databaseName);
      }).catch(error => {
        console.error('Error:', error);
      });

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}

    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;
