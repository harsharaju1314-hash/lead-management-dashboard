const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// GET /api/leads?page=1&limit=10
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Lead.countDocuments();
    const leads = await Lead.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      count: leads.length,
      data: leads
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
