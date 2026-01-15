require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected (LOCAL)"))
  .catch(err => console.error("❌ MongoDB error:", err.message));

app.use("/api/leads", require("./routes/leads.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
