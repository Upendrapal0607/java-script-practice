const mongoose = require("mongoose");
const dburi =
  "mongodb+srv://zaid:mongo%40123@cluster0.4xn39.mongodb.net/rendezvous-uat?socketTimeoutMS=30000&retryWrites=true";

  const connectDB = async () => {
    try {
      await mongoose.connect(dburi, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("MongoDB connected");
    } catch (error) {
      console.error(`MongoDB connection error: ${error}`);
      process.exit(1); 
    }
  };
  

module.exports = connectDB;
