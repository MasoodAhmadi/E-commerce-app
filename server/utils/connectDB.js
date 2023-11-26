const mongoose = require('mongoose');
const pw_db = process.env.DB_PASSWORD;

function docnnectDB() {
  mongoose.connect(
    `mongodb+srv://masood:${pw_db}@cluster0.auyob.mongodb.net/ecommerceapp`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});
module.exports = docnnectDB;
