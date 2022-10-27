const express = require('express');
const router = express.Router();
const { createNote, updateNote, deleteNote, getAllNotes } = require('./controller');

router.post('/', createNote);
router.put('/', updateNote);
router.delete('/', deleteNote);
router.get('/', getAllNotes);

module.exports = router;