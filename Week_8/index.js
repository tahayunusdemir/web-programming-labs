const express = require('express');
const notasController = require('./Controllers/notas');
const app = express();
const port = 3000;

// Load initial data before setting up routes or starting the server
notasController.loadInitialData();

// Middleware to parse JSON bodies
app.use(express.json());

// Initial data (managed in notas.js)

// Route definitions
app.get('/notas', notasController.getAllNotas);
app.post('/notas', notasController.createNota);
app.patch('/notas/:codigo', notasController.updateNota);
app.delete('/notas/:codigo', notasController.deleteNota);
app.get('/notas/:codigo', notasController.getNotaByCodigo);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  // File reading logic is now handled by loadInitialData()
});

// No longer needed
// // module.exports = { minhas_notas }; 