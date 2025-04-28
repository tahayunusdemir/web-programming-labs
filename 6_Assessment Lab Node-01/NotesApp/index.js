// index.js - Simple REST API with Express
const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Array to store notes
let minhas_notas = [20, 10, 15, 17];

// GET / - List all notes
app.get('/', (req, res) => {
  res.status(200).json(minhas_notas);
});

// GET /:index - Get a specific note
app.get('/:index', (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < minhas_notas.length) {
    res.status(200).json(minhas_notas[index]);
  } else {
    res.status(400).json({ error: 'Invalid note position' });
  }
});

// POST / - Add note from request body
app.post('/', (req, res) => {
  const value = parseInt(req.body.value);
  
  if (!isNaN(value)) {
    minhas_notas.push(value);
    res.status(200).json(minhas_notas);
  } else {
    res.status(400).json({ error: 'Invalid value' });
  }
});

// POST /add/:value - Add note from URL parameter
app.post('/add/:value', (req, res) => {
  const value = parseInt(req.params.value);
  
  if (!isNaN(value)) {
    minhas_notas.push(value);
    res.status(200).json(minhas_notas);
  } else {
    res.status(400).json({ error: 'Invalid value' });
  }
});

// PATCH /:index - Update note at specific position
app.patch('/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const value = parseInt(req.body.value);
  
  if (isNaN(value)) {
    return res.status(400).json({ error: 'Invalid value' });
  }
  
  if (index >= 0 && index < minhas_notas.length) {
    minhas_notas[index] = value;
    res.status(200).json(minhas_notas);
  } else {
    res.status(400).json({ error: 'Invalid note position' });
  }
});

// DELETE /:index - Delete note at specific position
app.delete('/:index', (req, res) => {
  const index = parseInt(req.params.index);
  
  if (index >= 0 && index < minhas_notas.length) {
    minhas_notas.splice(index, 1);
    res.status(200).json(minhas_notas);
  } else {
    res.status(400).json({ error: 'Invalid note position' });
  }
});

// DELETE / - Clear all notes
app.delete('/', (req, res) => {
  minhas_notas = [];
  res.status(200).json(minhas_notas);
});

// Start the server
app.listen(3000, () => {
  console.log('NotesApp - Developed by Taha');
});
