const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

const consumptionData = {
  clienteId: "12345",
  nome: "João Silva",
  endereco: {
    rua: "Rua Exemplo",
    numero: "42",
    cidade: "Lisboa",
    codigoPostal: "1234-567"
  },
  consumo: [
    {
      mes: "Janeiro",
      ano: 2023,
      kWhConsumido: 250,
      custoTotal: 35.50,
      dataLeitura: "2023-01-31"
    }
  ],
  informacoesAdicionais: {
    tipoTarifa: "Residencial",
    fornecedorEnergia: "Empresa XYZ",
    contratoAtivo: true
  }
};

app.get('/api/consumption', (req, res) => {
  res.json(consumptionData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 