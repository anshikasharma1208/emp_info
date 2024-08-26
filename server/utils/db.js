const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/employee';

const connectDb = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connection successful to DB');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(0);
  }
};

module.exports = connectDb;
