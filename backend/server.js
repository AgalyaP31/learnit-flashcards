const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const flashcardRoutes = require('./routes/flashcardRoutes');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes); // ✅ All user routes under /api/users
app.use("/api/flashcards", flashcardRoutes); // 👈 Mount flashcard API route


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
