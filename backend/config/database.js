const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDatabase;
