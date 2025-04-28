const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

const consumoData = {
  "clienteId": "12345",
  "nome": "João Silva",
  "endereco": {
    "rua": "Rua Exemplo",
    "numero": "42",
    "cidade": "Lisboa",
    "codigoPostal": "1234-567"
  },
  "consumo": [
    {
      "mes": "Janeiro",
      "ano": 2023,
      "kWhConsumido": 250,
      "custoTotal": 35.50,
      "dataLeitura": "2023-01-31"
    }
  ],
  "informacoesAdicionais": {
    "tipoTarifa": "Residencial",
    "fornecedorEnergia": "Empresa XYZ",
    "contratoAtivo": true
  }
};

// Route uses original key name for consistency with data
app.get('/consumo/:clienteId', (req, res) => {
  // In this simple example, we don't use the clienteId parameter
  // and always return the same data.
  // In a real application, relevant customer data should be retrieved
  // from a database or another source based on clienteId.
  res.json(consumoData);
});

app.listen(port, () => {
  console.log(`Service running at http://localhost:${port}`);
});