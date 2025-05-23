const Flashcard = require('../models/Flashcard');

exports.createFlashcard = async (req, res) => {
  const { question, answer } = req.body;
  const newCard = new Flashcard({ userId: req.user.id, question, answer });
  await newCard.save();
  res.status(201).json(newCard);
};

exports.getAllFlashcards = async (req, res) => {
  const flashcards = await Flashcard.find({ userId: req.user.id });
  res.json(flashcards);
};
