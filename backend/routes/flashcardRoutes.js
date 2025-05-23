const express = require("express");
const router = express.Router();
const { createFlashcard, getAllFlashcards } = require("../controllers/flashcardController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createFlashcard); // 🔐 protected route
router.get("/", protect, getAllFlashcards); // 🔐 protected route

module.exports = router;
