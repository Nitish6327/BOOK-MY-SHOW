const express = require("express");
const router = express.Router();

// ✅ GET booking
router.get("/booking", async (req, res) => {
  try {
    res.json({ message: "GET Booking working" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST booking
router.post("/booking", async (req, res) => {
  try {
    res.json({ message: "POST Booking working" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;