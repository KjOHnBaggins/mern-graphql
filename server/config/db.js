const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://test-user:testuser@cluster0.aoj76nr.mongodb.net/mgmt_db`?retryWrites=true&w=majority"
  );
  console.log(
    `Mongo server connect: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
