const mongoose = require('mongoose');
require('dotenv').config();
const Lead = require('../models/Lead');

const statuses = ['New', 'In Progress', 'Converted'];

const generateLeads = (count = 1000) => {
  const leads = [];

  for (let i = 1; i <= count; i++) {
    leads.push({
      name: `Lead ${i}`,
      email: `lead${i}@example.com`,
      phone: `99999${String(i).padStart(5, '0')}`,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }

  return leads;
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for seeding');

    await Lead.deleteMany({});
    await Lead.insertMany(generateLeads());

    console.log('1000 leads inserted');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
