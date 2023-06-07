const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connection");
const mahasiswaRouter = require("./routes/mahasiswa.route");

app.use(cors());
app.use(express.json());

// Connection to database
connectDB();

// Router
app.use("/", mahasiswaRouter);

// Server
app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
