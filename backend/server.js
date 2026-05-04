const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/myAppDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Local MongoDB Connected"))
  .catch(err => console.log("❌ Error:", err));

app.get("/", (req, res) => {
  res.json({
    message: "LAB30 backend is running",
    endpoints: ["/api/user", "/api/post", "/api/student", "/api/course"]
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api", require("./routes"));

// Server
app.listen(5000, () => console.log("🚀 Server running on 5000"));
