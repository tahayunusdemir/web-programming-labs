document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api/consumption';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Display error message to the user
            document.body.innerHTML = `<p>Error loading data: ${error.message}. Please ensure the server is running.</p>`;
        });
});

function displayData(data) {
    // Client Info
    document.getElementById('client-id').textContent = data.clienteId;
    document.getElementById('client-name').textContent = data.nome;

    // Address
    document.getElementById('address-street').textContent = data.endereco.rua;
    document.getElementById('address-number').textContent = data.endereco.numero;
    document.getElementById('address-city').textContent = data.endereco.cidade;
    document.getElementById('address-zip').textContent = data.endereco.codigoPostal;

    // Consumption History
    const consumptionList = document.getElementById('consumption-list');
    consumptionList.innerHTML = ''; // Clear previous entries
    data.consumo.forEach(item => {
        const div = document.createElement('div');
        div.className = 'consumption-item';
        div.innerHTML = `
            <h3>${item.mes} ${item.ano}</h3>
            <p><strong>Consumption (kWh):</strong> ${item.kWhConsumido}</p>
            <p><strong>Total Cost:</strong> €${item.custoTotal.toFixed(2)}</p>
            <p><strong>Reading Date:</strong> ${item.dataLeitura}</p>
        `;
        consumptionList.appendChild(div);
    });

    // Additional Info
    document.getElementById('info-tariff').textContent = data.informacoesAdicionais.tipoTarifa;
    document.getElementById('info-provider').textContent = data.informacoesAdicionais.fornecedorEnergia;
    document.getElementById('info-active').textContent = data.informacoesAdicionais.contratoAtivo ? 'Yes' : 'No';
} 