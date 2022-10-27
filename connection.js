const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGO_CONN;

const client = new MongoClient(uri);
const database = client.db('Notes');
const ToDo  = database.collection('ToDo');

module.exports = { client, database, ToDo };