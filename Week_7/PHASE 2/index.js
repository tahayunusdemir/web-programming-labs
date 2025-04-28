document.addEventListener('DOMContentLoaded', () => {
    // Use the example client ID or allow modification if needed
    const clientId = '12345'; 
    const apiUrl = `http://localhost:3000/consumo/${clientId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Populate customer info
            document.getElementById('clienteId').textContent = data.clienteId;
            document.getElementById('nome').textContent = data.nome;

            // Populate address
            document.getElementById('rua').textContent = data.endereco.rua;
            document.getElementById('numero').textContent = data.endereco.numero;
            document.getElementById('cidade').textContent = data.endereco.cidade;
            document.getElementById('codigoPostal').textContent = data.endereco.codigoPostal;

            // Populate consumption details (handling multiple entries if any)
            const consumoDiv = document.getElementById('consumoDetails');
            consumoDiv.innerHTML = ''; // Clear previous entries
            data.consumo.forEach(item => {
                const detailDiv = document.createElement('div');
                detailDiv.classList.add('data-item');
                detailDiv.innerHTML = `
                    <strong>Month/Year:</strong> ${item.mes} / ${item.ano}<br>
                    <strong>kWh Consumed:</strong> ${item.kWhConsumido}<br>
                    <strong>Total Cost:</strong> ${item.custoTotal.toFixed(2)}<br>
                    <strong>Reading Date:</strong> ${item.dataLeitura}
                `;
                consumoDiv.appendChild(detailDiv);
            });

            // Populate additional info
            document.getElementById('tipoTarifa').textContent = data.informacoesAdicionais.tipoTarifa;
            document.getElementById('fornecedorEnergia').textContent = data.informacoesAdicionais.fornecedorEnergia;
            document.getElementById('contratoAtivo').textContent = data.informacoesAdicionais.contratoAtivo ? 'Yes' : 'No';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Display an error message to the user
            document.body.innerHTML = `<h1>Error loading data</h1><p>Could not fetch data from the server. Please ensure the server is running and accessible at ${apiUrl}.</p><p>Error details: ${error.message}</p>`;
        });
}); 