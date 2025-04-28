const fs = require('fs');
const path = require('path');

// Define the path to the data file
const filePath = path.join(__dirname, '../shared/ficheiro_notas.txt');

// Data store: Array of objects { codigo, nomeDisciplina, nomeProfessor, nota }
let minhas_notas = [];

// Helper function to save notes to the file
const saveNotasToFile = (notas) => {
    try {
        // Convert array to JSON string for storage
        fs.writeFileSync(filePath, JSON.stringify(notas, null, 2)); // Use null, 2 for pretty printing
    } catch (error) {
        console.error("Error writing to file:", error);
        // Handle error appropriately in a real app (e.g., return error response)
    }
};

// Function to load initial data from the file
const loadInitialData = () => {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            // Avoid parsing empty file which results in error
            minhas_notas = data ? JSON.parse(data) : [];
            console.log('Notas (objects) loaded successfully from file.');
        } else {
             console.log('Data file not found, starting with empty notes.');
             minhas_notas = []; // Ensure it starts empty if file doesn't exist
             // Optionally create the file here if it doesn't exist
             saveNotasToFile([]);
        }
    } catch (error) {
        console.error("Error reading or parsing file:", error);
        minhas_notas = []; // Start empty on errors
    }
};

// GET all notas
const getAllNotas = (req, res) => {
    res.json(minhas_notas);
};

// GET nota by Codigo
const getNotaByCodigo = (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const nota = minhas_notas.find(n => n.codigo === codigo);
    if (nota) {
        res.json(nota);
    } else {
        res.status(404).send('Nota not found for the given codigo');
    }
};

// POST a new nota (object)
const createNota = (req, res) => {
    const { codigo, nomeDisciplina, nomeProfessor, nota } = req.body;

    // Basic validation (check if required fields are present)
    if (codigo === undefined || nomeDisciplina === undefined || nomeProfessor === undefined || nota === undefined) {
        return res.status(400).send('Missing required fields: codigo, nomeDisciplina, nomeProfessor, nota');
    }

    // Check if codigo already exists (optional, but good practice)
    if (minhas_notas.some(n => n.codigo === codigo)) {
        return res.status(409).send('Nota with this codigo already exists.'); // 409 Conflict
    }

    const novaNota = { codigo, nomeDisciplina, nomeProfessor, nota };
    minhas_notas.push(novaNota);
    saveNotasToFile(minhas_notas);
    res.status(201).json(novaNota);
};

// PATCH update an existing nota by Codigo
const updateNota = (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const index = minhas_notas.findIndex(n => n.codigo === codigo);

    if (index !== -1) {
        const updatedData = req.body;

        // Ensure codigo is not changed via PATCH, or handle appropriately
        if (updatedData.codigo !== undefined && updatedData.codigo !== codigo) {
           return res.status(400).send('Updating the codigo is not allowed.');
        }

        // Merge existing data with new data (allow partial updates)
        // Or simply replace the object fields based on request body
        minhas_notas[index] = { ...minhas_notas[index], ...updatedData }; // Keep existing codigo

        saveNotasToFile(minhas_notas);
        res.json(minhas_notas[index]);
    } else {
        res.status(404).send('Nota not found for the given codigo');
    }
};

// DELETE a nota by Codigo
const deleteNota = (req, res) => {
    const codigo = parseInt(req.params.codigo);
    const index = minhas_notas.findIndex(n => n.codigo === codigo);

    if (index !== -1) {
        const deletedNota = minhas_notas.splice(index, 1);
        saveNotasToFile(minhas_notas);
        res.json(deletedNota[0]);
    } else {
        res.status(404).send('Nota not found for the given codigo');
    }
};

module.exports = {
    loadInitialData, // Export the loading function
    getAllNotas,
    getNotaByCodigo,
    createNota,
    updateNota,
    deleteNota
    // No need to export minhas_notas directly
}; 