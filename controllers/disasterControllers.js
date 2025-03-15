const Disaster = require("../models/Disaster");

// Function to fetch all disasters
const getDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (error) {
    console.error("Error fetching disasters:", error);
    res.status(500).json({ error: "Error fetching disasters" });
  }
};

// Function to report a new disaster
const reportDisaster = async (req, res) => {
  try {
    const { type, location, description, lat, lng } = req.body;
    if (!type || !location || !description || !lat || !lng) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const newDisaster = new Disaster({ type, location, description, lat, lng });
    await newDisaster.save();
    res.status(201).json({ message: "Disaster reported successfully" });
  } catch (error) {
    console.error("Error reporting disaster:", error);
    res.status(500).json({ error: "Error reporting disaster" });
  }
};

// Ensure functions are exported correctly
module.exports = { getDisasters, reportDisaster };
