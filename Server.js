const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const disasterRoutes = require("./routes/disasterRoutes"); // Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use Disaster Routes
app.use("/api", disasterRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://admin:p%40123456@cluster0.1k5ih.mongodb.net/disasterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
