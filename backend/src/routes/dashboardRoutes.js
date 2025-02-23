const express = require('express');
const Dashboard = require('../models/Dashboard');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new dashboard entry
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(400).json({ message: 'Data field is required' });
    }

    const dashboard = new Dashboard({ userId: req.user.id, data });
    await dashboard.save();
    res.status(201).json(dashboard);
  } catch (error) {
    console.error('Error saving dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve dashboard entries for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const dashboards = await Dashboard.find({ userId: req.user.id });
    res.json(dashboards);
  } catch (error) {
    console.error('Error retrieving dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
