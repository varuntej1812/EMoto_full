// src/routes/authRoutes.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

// Initiate Google authentication
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Handle callback after Google has authenticated the user
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: true,
  }),
  (req, res) => {
    // Successful authentication, redirect to dashboard or send user info
    res.redirect('http://localhost:5173/dashboard');
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).send('Error logging out');
    }
    res.redirect('http://localhost:5173/');
  });
});

module.exports = router;
