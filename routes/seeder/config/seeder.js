const mongoose = require("mongoose");
const Disaster = require("../models/Disaster");

mongoose.connect("mongodb://127.0.0.1:27017/disasters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const disasters = [
  {
    name: "Earthquake",
    location: "Delhi",
    severity: "High",
    date: "2024-03-12",
  },
  {
    name: "Flood",
    location: "Mumbai",
    severity: "Medium",
    date: "2024-02-20",
  },
];

const seedDB = async () => {
  await Disaster.deleteMany({});
  await Disaster.insertMany(disasters);
  console.log("Disasters Seeded!");
  mongoose.connection.close();
};

seedDB();
