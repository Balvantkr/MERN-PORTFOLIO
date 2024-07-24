const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");

//dotenv configuration
dotenv.config();

connectDB();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8080;

app.use("/", (req, res) => {
  res.send("hello");
});

//listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
