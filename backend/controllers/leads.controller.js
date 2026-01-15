const Lead = require("../models/Lead");

exports.getLeads = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const leads = await Lead.find()
      .skip(skip)
      .limit(limit);

    const total = await Lead.countDocuments();

    res.json({
      leads,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
