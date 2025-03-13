const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Disaster = require('./models/Disaster');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleData = [
    { name: "Hurricane", location: "Florida", severity: "High", description: "Category 5 hurricane expected." },
    { name: "Flood", location: "Mumbai", severity: "Moderate", description: "Heavy rains causing floods." }
];

const seedDB = async () => {
    await Disaster.deleteMany({});
    await Disaster.insertMany(sampleData);
    console.log("Sample data added!");
    mongoose.connection.close();
};

seedDB();
